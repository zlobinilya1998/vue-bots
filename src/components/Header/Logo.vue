<template>
    <div class="header-logo" @click="$router.push({ name: 'shop' })">
        <img class="header-img" width="40" src="../../assets/logo.png" />
        <div class="logo-title-wrapper">
            <h3
                    :style="{
            color: $route.path === '/' ? '#9DD458' : 'black',
            transition: 'all .3s',
          }"
            >
                VUE SNEAKERS
            </h3>
            <p :style="{ opacity: '.4' }">Магазин лучших кроссовок</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped lang="scss">
    @import '/src/scss/style';
    .header-logo {
        display: flex;
        cursor: pointer;
        .logo-title-wrapper {
            margin-left: 16px;
            @media (max-width: $mobile) {
                display: none;
            }
        }
        &:hover .header-img {
            transform: rotate(30deg) scale(1.2);
        }
    }
    .header-img {
        transition: transform 0.3s ease;
    }

</style>