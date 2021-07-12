<template>
  <div class="page" :style="{padding:'0 20px'}">
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      <transition name="fade">
        <svg
          v-if="step"
          @click="step = ''"
          :style="{ position: 'absolute', left: '0', cursor: 'pointer' }"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="34"
            height="34"
            rx="7.5"
            fill="white"
            stroke="#9dd458"
          />
          <path
            d="M19 22L14 17L19 12"
            stroke="#9dd458"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </transition>
      <h3 class="page-title">{{ pageTitle }}</h3>
    </div>
    <div class="page-content">
        <div class="page-content-main">
          <div @click="navigation('score')" :class="{active:$route.name === 'score'}"  class="page-content-main-item">
            <div class="icon">
              <svg
                width="29"
                height="35"
                viewBox="0 0 129 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C2 4.23858 4.23858 2 7 2H122C124.761 2 127 4.23858 127 7V71C127 73.7614 124.756 76 121.994 76C77.9033 76 51.0967 76 7.00564 76C4.24422 76 2 73.7614 2 71V7Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <line
                  x1="2"
                  y1="11.5"
                  x2="127"
                  y2="11.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <line
                  x1="2"
                  y1="21.5"
                  x2="127"
                  y2="21.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <line
                  x1="9"
                  y1="62"
                  x2="16"
                  y2="62"
                  stroke="#7EC3FF"
                  stroke-width="2"
                />
                <line
                  x1="21"
                  y1="62"
                  x2="28"
                  y2="62"
                  stroke="#7EC3FF"
                  stroke-width="2"
                />
                <path
                  d="M115 32L115.43 33.5056C116.456 37.0967 116.456 40.9033 115.43 44.4944L115 46"
                  stroke="#7EC3FF"
                />
                <path
                  d="M118 30L118.554 32.4921C119.506 36.7784 119.506 41.2216 118.554 45.5079L118 48"
                  stroke="#7EC3FF"
                />
                <path
                  d="M112 34V34C113.284 37.2097 113.284 40.7903 112 44V44"
                  stroke="#7EC3FF"
                />
                <path
                  d="M110 36V36C110.649 37.9473 110.649 40.0527 110 42V42"
                  stroke="#7EC3FF"
                />
              </svg>
            </div>
            <p class="page-content-main-item-description">Личный счет</p>
          </div>
          <div @click="navigation('personal')" :class="{active:$route.name === 'personal'}" class="page-content-main-item">
            <div class="icon">
              <svg
                width="29"
                height="35"
                viewBox="0 0 122 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C2 4.23858 4.23858 2 7 2H115C117.761 2 120 4.23858 120 7V112C120 114.761 117.754 117 114.992 117C73.6321 117 48.3679 117 7.00791 117C4.24649 117 2 114.761 2 112V7Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <circle
                  cx="61"
                  cy="46"
                  r="20.5"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <mask id="path-3-inside-1" fill="white">
                  <path
                    d="M22 118.5C22 113.313 23.0088 108.176 24.9687 103.384C26.9286 98.5916 29.8013 94.2372 33.4228 90.5693C37.0443 86.9014 41.3436 83.9918 46.0753 82.0068C50.807 80.0217 55.8785 79 61 79C66.1216 79 71.193 80.0217 75.9247 82.0068C80.6564 83.9918 84.9557 86.9014 88.5772 90.5693C92.1987 94.2372 95.0714 98.5917 97.0313 103.384C98.9912 108.176 100 113.313 100 118.5L61 118.5L22 118.5Z"
                  />
                </mask>
                <path
                  d="M22 118.5C22 113.313 23.0088 108.176 24.9687 103.384C26.9286 98.5916 29.8013 94.2372 33.4228 90.5693C37.0443 86.9014 41.3436 83.9918 46.0753 82.0068C50.807 80.0217 55.8785 79 61 79C66.1216 79 71.193 80.0217 75.9247 82.0068C80.6564 83.9918 84.9557 86.9014 88.5772 90.5693C92.1987 94.2372 95.0714 98.5917 97.0313 103.384C98.9912 108.176 100 113.313 100 118.5L61 118.5L22 118.5Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="6"
                  mask="url(#path-3-inside-1)"
                />
              </svg>
            </div>
            <p class="page-content-main-item-description">Личные данные</p>
          </div>
          <div @click="navigation('purchases')" :class="{active:$route.name === 'purchases'}"  class="page-content-main-item">
            <div class="icon">
              <svg
                width="29"
                height="35"
                viewBox="0 0 90 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 14C2 11.2386 4.23858 9 7 9H83C85.7614 9 88 11.2386 88 14V105C88 107.761 85.7523 110 82.9909 110C54.0975 110 35.9025 110 7.00914 110C4.24772 110 2 107.761 2 105V14Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <path
                  d="M14 7C14 4.23858 16.2386 2 19 2H70C72.7614 2 75 4.23858 75 7V11C75 13.7614 72.7559 16 69.9944 16C50.8134 16 38.1866 16 19.0056 16C16.2441 16 14 13.7614 14 11V7Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <line
                  x1="33.5"
                  y1="34.5"
                  x2="70.5"
                  y2="34.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="33.5"
                  y1="46.5"
                  x2="70.5"
                  y2="46.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="33.5"
                  y1="57.5"
                  x2="70.5"
                  y2="57.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="33.5"
                  y1="67.5"
                  x2="70.5"
                  y2="67.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="20.5"
                  y1="34.5"
                  x2="25.5"
                  y2="34.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="20.5"
                  y1="46.5"
                  x2="25.5"
                  y2="46.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="20.5"
                  y1="57.5"
                  x2="25.5"
                  y2="57.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="20.5"
                  y1="67.5"
                  x2="25.5"
                  y2="67.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="page-content-main-item-description">История заказов</p>
          </div>
          <div @click="navigation('favorite')" :class="{active:$route.name === 'favorite'}" class="page-content-main-item">
            <div class="icon">
              <svg
                width="29"
                height="35"
                viewBox="0 0 129 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 35C2 32.2386 4.23858 30 7 30H122C124.761 30 127 32.2386 127 35V99C127 101.761 124.756 104 121.994 104C77.9033 104 51.0967 104 7.00564 104C4.24422 104 2 101.761 2 99V35Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <path
                  d="M97 2L33 2C30.2386 2 28 4.23857 28 7L28 43.1559C28 44.9193 28.9289 46.5523 30.4446 47.4536L62.4446 66.4806C64.0195 67.417 65.9805 67.417 67.5554 66.4806L99.5554 47.4536C101.071 46.5523 102 44.9193 102 43.1559L102 7C102 4.23857 99.7614 2 97 2Z"
                  fill="white"
                  stroke="#7EC3FF"
                  stroke-width="3"
                />
                <path
                  d="M3.5 32L65 68L125 32"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M45 24.5L63.5 39.5L90.5 19.5"
                  stroke="#7EC3FF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="page-content-main-item-description">Избранное</p>
          </div>
        </div>
        <div class="page-content-nav">
          <transition name="fade" mode="out-in">
              <router-view></router-view>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Profile",
  data: () => ({
    step: "",
    activeNav:"",
  }),
  methods: {
    ...mapMutations(["setUser"]),
    navigation(name){
      this.$router.push({name})
    }
  },
  computed: {
    ...mapGetters(["user"]),
    pageTitle() {
      if (!this.step) return "Личный кабинет";
      else return this.step;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.page {
  transition: 0.2s;
  position: relative;
  &-title {
    text-align: center;
    color: $second-color;
  }
  &-content {
    margin: 50px 0 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    &-main {
      display: flex;
      flex-direction: column;
      &-item {
        background: #7ec3ff;
        width: 250px;
        padding: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        transition: 0.3s;
        cursor: pointer;
        margin-top: 5px;
        color: $main-text;
        &.active {
          background: #58AFFF;
          transform: translateX(10px);
        }
        .icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: $main-color;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        }
        &-description {
          transition: all 0.3s 0.2s;
        }
      }
    }
    &-nav {
      position: relative;
      width: 70%;
      border-radius: 10px;
      padding: 20px;
      background: $main-color;
    }
  }
}
.route-enter-active,
.route-leave-active {
  transition: all 0.5s;
}
.route-enter, .route-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
