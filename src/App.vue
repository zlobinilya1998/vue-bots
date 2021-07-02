<template>
  <div class="app">
    <Main v-if="user"/>
    <Auth v-else />
    <Modals />
  </div>
</template>

<script>
const Main = () => import("./views/Main");
const Auth = () => import("./views/Auth");
const Modals = () => import("./views/Modals");

export default {
  name: "App",
  data: () => ({
    user: null,
  }),
  components: {
    Main,
    Modals,
    Auth,
  },
  watch: {
    basket: {
      handler(basket) {
        if (basket.show) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
      },
      deep: true,
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body::-webkit-scrollbar {
  width: 0;
}
.btn {
  height: 55px;
  width: 245px;
  border-radius: 18px;
  background: #9dd458;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 40px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 21px;
}
.btn:hover {
  box-shadow: 3px 3px 22px -12px rgba(34, 60, 80, 0.8);
}
.input {
  background: #e7f6ff;
  border-radius: 20px;
  display: flex;
  height: 50px;
  margin: 25px auto 0;
  padding: 0 20px;
  transition: 0.3s;
  border: none;
  width: 100%;
}
.input:focus {
  outline: none;
}
.img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped>
.app {
  min-height: 100vh;
  background: #e7f6ff;
  padding: 85px 0;
}
</style>
