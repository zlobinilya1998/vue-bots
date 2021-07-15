<template>
    <div class="footer">
        <div class="footer-left">
            <ul class="footer-left-nav">
                <li>Главная</li>
                <li>Правила и условия</li>
                <li>Конфиденциальность и coockie файлы</li>
            </ul>
        </div>
        <div>Vue Sneakers 2021</div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    @import "@/scss/style";
    .footer {
        height: 85px;
        display: flex;
        align-items: center;
        border-top: 2px solid $main-color;
        justify-content: space-between;
        padding: 0 45px;
        &-left {
            flex: 1;
            &-nav {
                flex: 1;
                display: flex;
                justify-content: space-between;
                list-style: none;
            }
        }
    }
</style>