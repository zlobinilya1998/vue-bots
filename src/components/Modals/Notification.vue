<template>
  <div class="wrapper" :style="{ background: currentColor }">
    <p>{{ notification.text }}</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Notification",
  data: () => ({
    colors: {
      danger: "#F56666",
      success: "#a5d364",
    },
  }),
  computed: {
    ...mapGetters(["notification"]),
    currentColor() {
      return this.colors[this.notification.type];
    },
  },
  methods: {
    ...mapMutations(["setNotification"]),
  },
  mounted() {
    setTimeout(() => {
      this.setNotification({ show: false, text: null, type: "success" });
    }, 3000);
  },
};
</script>
<style scoped lang="scss">
  @import "@/scss/style";
.wrapper {
  position: fixed;
  top: 25px;
  min-width: 600px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  min-height: 40px;
  background: $second-color;
  color: $main-text;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
