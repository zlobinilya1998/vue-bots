<template>
  <div class="App">
    <MainLayout />
    <Modals />
  </div>
</template>

<script>
const MainLayout = () => import("@/Layouts/MainLayout");
const Modals = () => import("@/components/Modals/Modals");
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    MainLayout,
    Modals,
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
  methods: {
    ...mapMutations(["setUser"]),
  },
  mounted() {
    let token = JSON.parse(sessionStorage.getItem("token"));
    if (token)
      this.$axios
        .post("login/session")
        .then((res) => {
          this.setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
  },
};
</script>

<style lang="scss">
@import "scss/style";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body::-webkit-scrollbar {
  width: 0;
}
.input {
  background: $main-color;
  border-radius: 20px;
  display: flex;
  height: 50px;
  margin: 25px auto 0;
  padding: 0 20px;
  transition: 0.3s;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
}
.input.error {
  border: 1px solid red;
}
.btn {
  height: 55px;
  width: 245px;
  border-radius: 18px;
  background: $second-color;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 40px;
  color: $main-text;
  cursor: pointer;
  transition: all 0.3s;
  font-size: $third-font;
  &:hover {
    box-shadow: 3px 3px 22px -12px rgba(34, 60, 80, 0.8);
  }
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
<style scoped lang="scss">
@import "scss/style";
.App {
  min-height: 100vh;
  background: $main-color;
  padding: 85px 0;
  @media (max-width: $mobile) {
    padding: 0 20px;
  }
}
</style>
