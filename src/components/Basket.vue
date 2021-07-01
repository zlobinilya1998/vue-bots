<template>
    <transition name="fade">
        <div class="cart-wrapper" @click="closeCart">
            <transition name="cart">
                <div v-if="showCart" class="cart" ref="cart">
                    <h2 class="cart-title">Корзина</h2>
                    <div v-if="basket.items.length > 0" class="items-wrapper">
                        <transition-group name="list" appear>
                            <div v-for="item of basket.items" :key="item.id" class="cart-item">
                                <img :style="{position:'absolute',left:'0'}" width="100" height="100%" src="" alt="">
                                <div :style="{marginLeft:'100px'}">
                                    {{item.name}}
                                    {{item.price}}
                                </div>
                                <svg class="delete-btn" @click="deleteItemBasket(item)" :style="{cursor:'pointer',position:'absolute',right:'0px',top:'-8px'}" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                                </svg>
                            </div>
                        </transition-group>
                        <div class="order-wrapper">
                            <div :style="{display: 'flex',justifyContent: 'space-between'}">
                                <p>Итого:</p>
                                <p>{{curPrice}}</p>
                            </div>
                            <div :style="{display: 'flex',justifyContent: 'space-between',marginTop:'20px'}">
                                <p>Скидка 5%:</p>
                                <p>{{curPrice*0.05}}</p>
                            </div>
                            <button class="btn order-btn">
                                <p>Оформить заказ</p>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="cart-empty-wrapper" v-else>
                        <div class="animated" :style="{display:'flex',justifyContent:'center'}">
                            <img src="../assets/emptyBasket.png">
                        </div>
                        <h3 class="cart-empty-title">Корзина пустая</h3>
                        <p class="cart-empty-description">Добавьте хотя бы одну пару</p>
                        <p class="cart-empty-description">кроссовок, чтобы сделать заказ.</p>
                        <button class="btn" @click="closeCart($event,true)">
                            <svg :style="{marginRight:'20px'}" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Вернуться назад</p>
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    import {mapMutations,mapGetters} from 'vuex'
    export default {
        name: "Basket",
        data:()=>({
            showCart:false
        }),
        methods:{
            ...mapMutations(["setShowBasket","deleteItemBasket"]),
            closeCart({target},flag = false){
                if (target.classList.contains('cart-wrapper') || flag) {
                    this.showCart = false
                    setTimeout(()=>{
                        this.setShowBasket(false)
                    },200)
                }
            },
        },
        computed:{
            ...mapGetters(['basket']),
            curPrice(){
                let init = 0;
                let reducer = (acc,item) => acc + item.price
                return this.basket.items.reduce(reducer,init).toFixed(0)
            }
        },
        mounted() {
            this.showCart = true;
        },
    }
</script>

<style scoped>
    .cart-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 5;
        overflow: hidden;
    }
    .cart {
        position: absolute;
        right: 0;
        height: 100%;
        width: 385px;
        transition: all .3s ;
        background: #FFFFFF;
        padding: 30px;
    }
    .cart-animation {
        transform: translateX(0);
        opacity: 1;
    }
    .cart-title {
        padding-bottom: 15px;
        border-bottom: .5px solid rgba(128, 128, 128, 0.3);
    }
    .btn {
        height: 55px;
        width: 245px;
        border-radius: 18px;
        background: #9DD458;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        margin-top: 40px;
        color: #FFFFFF;
        cursor: pointer;
        transition: all .3s;
    }
    .btn:hover {
        box-shadow: 3px 3px 22px -12px rgba(34, 60, 80, 0.8);
    }
    .cart-empty-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .cart-empty-title {
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        margin: 20px 0 10px;
    }
    .cart-empty-description {
        font-size: 16px;
        line-height: 24px;
        opacity: .4;
        text-align: center;
        padding: 0 20px;
    }
    .animated {
        animation: cart-animation 3s linear infinite;
    }
    .items-wrapper::-webkit-scrollbar {
        display: none;
    }
    .items-wrapper {
        height: 475px;
        overflow-y: scroll;
    }
    .cart-item {
        width: 100%;
        height: 100px;
        background: #FFFFFF;
        border: 1px solid #F3F3F3;
        border-radius: 20px;
        margin: 20px 0;
        padding: 20px;
        display: flex;
        align-items: center;
        position: relative;
        transition: all .4s;
    }
    .delete-btn path,rect {
        transition: all .4s;
    }
    .cart-item:hover .delete-btn path {
        fill: red;
    }
    .cart-item:hover .delete-btn rect {
        stroke: red;
    }

    @keyframes cart-animation {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(5px);
        }
        50% {
            transform: translateY(10px);
        }
        75% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(0);
        }
    }
    .order-wrapper {
        position: absolute;
        width: 325px;
        bottom: 30px;
        border-top: .5px solid rgba(128, 128, 128, 0.3);
        padding-top: 15px;
    }
    .order-btn {
        width: 100%;
    }
    .order-btn p {
        margin-right: 15px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
    .cart-enter-active, .cart-leave-active {
        transition: all .3s ease;
    }
    .cart-enter, .cart-leave-to /* .cart-leave-active до версии 2.1.8 */ {
        transform: translateX(500px);
        opacity: 0;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateX(30px);
    }

</style>