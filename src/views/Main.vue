<template>
  <div class="container">
    <Header/>
    <div class="content">
      <transition name="router" appear mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
const Header = () => import("../components/Header/Header");
const Footer = () => import("../components/Footer/Footer");
export default {
  name: "Main",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/style";
.container {
  max-width: 1080px;
  margin: 0 auto;
  background: $third-color;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
}
.content {
  padding: 45px;
  overflow: hidden;
  @media (max-width: $mobile) {
    padding: 10px;
  }
}
.router-enter-active,
.router-leave-active {
  transition: all 0.2s;
}
.router-enter, .fade-leave-to /* .router-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(20px);
}
</style>
