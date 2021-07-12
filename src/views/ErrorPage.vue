<template>
  <div class="wrapper">
    <p class="text">Упс,страница не найдена!</p>
    <button @click="$router.push({name:'login'})" class="btn">
      <p>Вернуться назад</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
@import "./src/scss/style";
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 250px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $third-color;
  padding: 20px;
  border-radius: 16px;
    .text {
        font-size: $second-font;
        color: $third-text;
    }
}
</style>
