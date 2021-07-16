<template>
  <transition-group name="fade">
    <Notification key="second" v-if="modals.notification.show" />
    <Basket key="third" v-if="basket.show" />
    <Tooltip key="four" :item="modals.tooltip.item" v-if="modals.tooltip.show" />
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
const Notification = () => import("./Notification/Notification");
const Basket = () => import("./Basket/Basket");
const Tooltip = () => import("./Tooltip/Tooltip");

export default {
  name: "Modals",
  components: {
    Notification,
    Basket,
    Tooltip,
  },
  computed: {
    ...mapGetters(["modals","basket"]),
  },
};
</script>

<style scoped></style>
