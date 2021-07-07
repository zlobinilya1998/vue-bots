<template>
  <div class="loader" :style="{width:`${w}px`,height:`${h}px`}">
    <svg
      class="animated"
      width="67"
      height="67"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="33.5" cy="33.5" r="28.5" stroke="transparent" stroke-width="10" />
      <path
        class="fill"
        d="M34 67C36.7614 67 39 64.7614 39 62C39 59.2386 36.7614 57 34 57V67ZM34 10C36.7614 10 39 7.76142 39 5C39 2.23858 36.7614 0 34 0V10ZM34 57C20.6628 57 10 46.3971 10 33.5H0C0 52.0832 15.3047 67 34 67V57ZM10 33.5C10 20.6029 20.6628 10 34 10V0C15.3047 0 0 14.9168 0 33.5H10Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props:{
    w:{type:String,default:'40'},
    h:{type:String,default:'40'},
  },
  name: "Loader",
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  .fill {
    fill: #FFFFFF;
  }
}
.animated {
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
