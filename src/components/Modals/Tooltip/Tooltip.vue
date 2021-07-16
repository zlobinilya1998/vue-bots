<template>
  <div class="wrapper" @click="closeModal">
    <div class="tooltip" ref="tooltip">
      <img class="img" :src="item.img" />
      <h4 class="name">{{ item.name }}</h4>
      <p class="price">{{ item.price }} руб.</p>
      <svg
        @click="closeModal($event, true)"
        class="close"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="31"
          height="31"
          rx="7.5"
          fill="white"
          stroke="#DBDBDB"
        />
        <path
          d="M20.0799 18.6156L17.6311 16.1668L20.0798 13.7181C21.0241 12.7739 19.5596 11.3094 18.6154 12.2537L16.1667 14.7024L13.7179 12.2536C12.7738 11.3096 11.3095 12.7739 12.2535 13.718L14.7023 16.1668L12.2536 18.6155C11.3093 19.5597 12.7738 21.0242 13.718 20.0799L16.1667 17.6312L18.6155 20.08C19.5597 21.0242 21.0241 19.5598 20.0799 18.6156Z"
          fill="#B5B5B5"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  name: "Tooltip",
  methods: {
    ...mapMutations(["setTooltip"]),
    closeModal({ target }, flag = false) {
      if (target.classList.contains("wrapper") || flag) {
        this.$refs.tooltip.style.transform = "scale(0)";
        setTimeout(() => {
          this.setTooltip({ show: false });
        }, 250);
      } else return;
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      this.$refs.tooltip.style.transform = "scale(1)";
    }, 250);
  },
  destroyed() {
    document.body.style.overflow = "";
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.wrapper {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(169, 169, 169, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  .tooltip {
    width: 500px;
    min-height: 300px;
    background: white;
    padding: 20px;
    transform: scale(0);
    border-radius: 10px;
    transition: 0.2s;
    color: $third-text;
    box-shadow: 1px 6px 24px 0px rgba(34, 60, 80, 0.2);
  }
}
.name {
  position: absolute;
  z-index: 1;
  text-align: center;
  left: 50%;
  width: max-content;
  transform: translateX(-50%);
}
.price {
  position: absolute;
  right: 25px;
  bottom: 20px;
  font-size: $second-font;
  color: $second-text;
  font-weight: bolder;
}
.img {
  height: 280px;
  object-fit: contain;
}
.close {
  position: absolute;
  right: -15px;
  top: -15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  rect {
    transition: .3s;
  }
  path {
    transition: .3s;
  }
  &:hover {
    rect {
      stroke: $five-color;
    }
    path {
      fill: $five-color;
    }
  }
}
</style>
