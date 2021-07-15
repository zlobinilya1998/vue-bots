<template>
  <div
    class="cart-item"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    ref="item"
  >
    <transition name="fade">
      <div v-if="hover" class="item-bg">
        <div v-if="hover" class="delete-btn" @click="deleteItemBasket(item)">
          Убрать
        </div>
      </div>
    </transition>
    <img
      :style="{
        position: 'absolute',
        left: '0',
        padding: '10px',
      }"
      width="100"
      height="100%"
      :src="item.img"
      alt="Cart item"
    />
    <div :style="{ marginLeft: '100px' }">
      <p>
        {{ item.name }}
      </p>
      <p :style="{ marginTop: '10px', fontWeight: '600' }">
        {{ item.price }} руб.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  data: () => ({
    hover: false,
  }),
  methods: {
    deleteItemBasket(item) {
      this.$refs.item.classList.add("deleted");
      setTimeout(() => {
        this.$emit("deleteItemBasket", item);
      }, 250);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.cart-item {
  width: 100%;
  height: 100px;
  background: $third-color;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.4s;
  cursor: pointer;
  &.deleted {
    opacity: 0;
  }
  img {
    transition: 0.5s;
  }
  &:hover img {
    transform: scale(1.05);
  }
}
.item-bg {
  position: absolute;
  border-radius: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete-btn {
  color: $main-color;
  padding: 5px 15px;
  border-radius: 10px;
  background: $second-color;
  position: absolute;
  bottom: -10px;
  right: 0;
}
</style>
