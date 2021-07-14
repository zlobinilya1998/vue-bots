<template>
    <transition-group name="fade">
      <Notification key="second" v-if="notification.show" />
      <Basket key="third" v-if="basket.show" />
    </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
const Notification = () => import("./Notification/Notification");
const Basket = () => import("./Basket/Basket");
export default {
  name: "Modals",
  components: {
    Notification,
    Basket,
  },
  computed: {
    ...mapGetters(["notification", "basket"]),
  },
};
</script>

<style scoped></style>
