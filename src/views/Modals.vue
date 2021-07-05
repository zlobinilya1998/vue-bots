<template>
    <transition-group name="fade">
      <Loader key="first" v-if="loader.show" />
      <Notification key="second" v-if="notification.show" />
      <Basket key="third" v-if="basket.show" />
    </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
const Loader = () => import("../components/Modals/Loader");
const Notification = () => import("../components/Modals/Notification");
const Basket = () => import("../components/Modals/Basket");
export default {
  name: "Modals",
  components: {
    Loader,
    Notification,
    Basket,
  },
  computed: {
    ...mapGetters(["loader", "notification", "basket"]),
  },
};
</script>

<style scoped></style>
