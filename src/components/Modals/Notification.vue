<template>
    <div class="wrapper">
      <p>{{ notification.text }}</p>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapGetters(["notification"]),
  },
  methods: {
    ...mapMutations(["setNotification"]),
  },
  mounted() {
    setTimeout(() => {
      this.setNotification({ show: false, text: null });
    }, 5000);
  },
};
</script>
<style scoped>
.wrapper {
  position: fixed;
  top: 25px;
  min-width: 600px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  min-height: 40px;
  background: rgba(255, 255, 255);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
