<template>
  <transition name="fade">
    <div class="cart-wrapper" @click="closeCart">
      <transition name="cart">
        <div v-if="showCart" class="cart" ref="cart">
          <h2 class="cart-title">Корзина</h2>
          <transition-group name="fade" mode="out-in">
            <div
              key="first"
              v-if="basket.items.length > 0"
              class="items-wrapper"
            >
              <transition-group name="list" move-class="move" appear>
                <Item @deleteItemBasket="deleteItemBasket" :item="item" v-for="item of basket.items" :key="item.id"  />
              </transition-group>
              <div class="order-wrapper">
                <div
                  :style="{ display: 'flex', justifyContent: 'space-between' }"
                >
                  <p>Итого:</p>
                  <p>{{ curPrice }} руб.</p>
                </div>
                <div
                  :style="{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }"
                >
                  <p>Скидка 5%:</p>
                  <p :style="{color:'#90c447'}">{{ discount }} руб.</p>
                </div>
                <div
                  :style="{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    marginTop: '20px',
                  }"
                >
                  <p>С учётом скидки</p>
                  <p class="total-price">{{ withDiscount }} руб.</p>
                </div>
                <button class="btn order-btn" @click="createOrder">
                  <transition-group name="fade">
                    <div
                      key="first"
                      v-if="!loader.show"
                      :style="{ display: 'flex', alignItems: 'center' }"
                    >
                      <p>Оформить заказ</p>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7H14.7143"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.71436 1L14.7144 7L8.71436 13"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <Loader key="second" v-else />
                  </transition-group>
                </button>
              </div>
            </div>
            <div
              key="second"
              v-else-if="successfullyOrder"
              class="successfully-order"
            >
              <img height="120" width="83" src="../../../assets/order.png" />
              <h3>Заказ оформлен!</h3>
              <p class="order-descr">
                Ваш заказ скоро будет передан курьерской доставке
              </p>
              <button class="btn" @click="closeCart($event, true)">
                <svg
                  :style="{ marginRight: '20px' }"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7144 7L1.00007 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Вернуться назад</p>
              </button>
            </div>
            <div key="third" class="cart-empty-wrapper" v-else>
              <div
                class="animated"
                :style="{ display: 'flex', justifyContent: 'center' }"
              >
                <img src="../../../assets/emptyBasket.png" />
              </div>
              <h3 class="cart-empty-title">Корзина пустая</h3>
              <p class="cart-empty-description">Добавьте хотя бы одну пару</p>
              <p class="cart-empty-description">
                кроссовок, чтобы сделать заказ.
              </p>
              <button class="btn" @click="closeCart($event, true)">
                <svg
                  :style="{ marginRight: '20px' }"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7144 7L1.00007 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Вернуться назад</p>
              </button>
            </div>
          </transition-group>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
const Item = () => import("./Item");
const Loader = () => import("../Loader/Loader");
export default {
  name: "Basket",
  data: () => ({
    showCart: false,
    successfullyOrder: false,
  }),
  watch: {
    successfullyOrder() {
      setTimeout(() => {
        this.successfullyOrder = false;
      }, 10000);
    },
  },
  methods: {
    ...mapMutations([
      "setShowBasket",
      "clearBasket",
      "deleteItemBasket",
      "setLoader",
    ]),
    createOrder() {
      this.setLoader({ show: true });
      setTimeout(() => {
        this.$axios
          .post("order", {
            items: this.basket.items.map((item) => ({
              ...item,
              price: item.price * 0.95,
            })),
          })
          .then((res) => {
            this.clearBasket();
            this.setLoader({ show: false });
            this.successfullyOrder = true;
            console.log(res);
          });
      }, 1500);
    },
    closeCart({ target }, flag = false) {
      if (target.classList.contains("cart-wrapper") || flag) {
        this.showCart = false;
        setTimeout(() => {
          this.setShowBasket(false);
        }, 200);
      }
    },
  },
  computed: {
    ...mapGetters(["basket", "loader"]),
    discount() {
      return (this.curPrice * 0.05).toFixed(0);
    },
    withDiscount() {
      return (this.curPrice * 0.95).toFixed(0);
    },
    curPrice() {
      let init = 0;
      let reducer = (acc, item) => acc + item.price;
      return this.basket.items.reduce(reducer, init).toFixed(0);
    },
  },
  components: {
    Loader,
    Item,
  },
  mounted() {
    this.showCart = true;
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
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
  transition: all 0.3s;
  background: $third-color;
  padding: 30px;
  &-title {
    padding-bottom: 15px;
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.3);
    font-size: $second-font;
  }
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
  font-size: $second-font;
  color: $second-color;
  text-align: center;
  margin: 20px 0 10px;
}
.cart-empty-description {
  font-size: $third-font;
  line-height: 24px;
  opacity: 0.5;
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

.order-wrapper {
  position: absolute;
  width: 325px;
  bottom: 30px;
  border-top: 0.5px solid rgba(128, 128, 128, 0.3);
  padding-top: 15px;
}
.order-btn {
  width: 100%;
  position: relative;
}
.order-btn p {
  margin-right: 15px;
}
.successfully-order {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  img {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 9px;
    color: $second-text;
    font-weight: 600;
    font-size: $second-font;
  }
  .order-descr {
    text-align: center;
    opacity: 0.5;
    font-weight: 400;
    font-size: $third-font;
  }
}
.total-price {
  font-size: $third-font;
  color: $third-text;
  background: $main-color;
  padding: 5px;
  border-radius: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.cart-enter-active,
.cart-leave-active {
  transition: all 0.3s ease;
}
.cart-enter, .cart-leave-to /* .cart-leave-active до версии 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
</style>
