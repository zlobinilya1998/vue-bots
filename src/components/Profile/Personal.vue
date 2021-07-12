<template>
        <div class="img-wrapper">
            <img src="" width="40" height="40" class="img" alt="">
        </div>
</template>

<script>
    export default {
        name: "Personal"
    }
</script>

<style scoped lang="scss">
    @import "../../scss/style.css";

    .img-wrapper {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 10px;
        background: red;
        img {
            height: 100%;
        }
    }
</style>