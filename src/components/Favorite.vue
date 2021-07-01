<template>
    <div class="page" :style="{height:favorites.length ? 'auto' : '450px'}">
        <div v-if="favorites.length > 0" class="page-title">
            <svg @click="$router.go(-1)" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
                <path d="M19 22L14 17L19 12" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3>Мои покупки</h3>
        </div>
        <div v-else class="no-purchases">
            <img class="no-purchases-img" src="../assets/purchases.png" alt="purchases">
            <h3 class="no-purchases-title">У вас нет заказов</h3>
            <p class="no-purchases-desctiption">Сделайте хотя бы один заказ</p>
            <button @click="$router.go(-1)" class="btn order-btn">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Вернуться назад</p>
            </button>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    export default {
        name: "Favorites",
        computed:{
            ...mapGetters(['favorites'])
        },
    }
</script>

<style scoped>
    .page {
        transition: .2s;
    }
    .page-title {
        display: flex;
        align-items: center;
    }
    .page-title svg {
        margin-right: 10px;
    }
    .no-purchases {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .no-purchases-img {
        margin-bottom: 24px;
    }
    .no-purchases-title {
        margin-bottom: 10px;
    }
    .no-purchases-desctiption {
        opacity: .4;
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
    .order-btn p {
        margin-left: 15px;
    }
</style>