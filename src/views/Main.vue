<template>
  <div class="container">
    <Header />
    <div class="content">
      <transition name="router" appear mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
const Header = () => import("../components/Header");
export default {
  name: "Main",
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  transition: all 0.3s;
}
.content {
  padding: 45px 60px;
  overflow: hidden;
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
