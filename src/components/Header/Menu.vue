<template>
  <div class="header-right">
    <transition name="fade">
      <div
        :style="{
          position: 'absolute',
          right: '45px',
          display: 'flex',
          alignItems: 'center',
        }"
        v-if="!menuShow"
      >
        <div @click="setShowBasket(true)" class="cart-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="cart-item"
              d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
              stroke="#9B9B9B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="cart-item"
              d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
              stroke="#9B9B9B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="cart-item"
              d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
              stroke="#9B9B9B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <transition name="fade">
          <p v-if="cartPrice" class="price">
            {{ displayNumber + " руб." }}
          </p>
        </transition>
        <svg
          @click="$router.push({ name: 'profile' })"
          class="cart-user"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :fill="$route.path === '/profile' ? '#7EC3FF' : '#9B9B9B'"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
          />
        </svg>
      </div>
    </transition>
    <transition name="email">
      <div
        class="user-wrapper"
        @click="tooltipShow"
        :style="{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }"
        v-if="menuShow"
      >
        <svg
          :style="{ width: '25px', height: '25px' }"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 20.5C0 9.38695 9.38695 0 20.5 0C31.613 0 41 9.38695 41 20.5C41 27.0395 37.7364 32.9599 32.8 36.7442V36.9H32.5909C29.1715 39.4522 24.9833 41 20.5 41C16.0166 41 11.8285 39.4522 8.4091 36.9H8.2V36.7442C3.2636 32.9599 0 27.0374 0 20.5ZM14.6031 31.2338C13.5127 32.111 12.7538 33.3338 12.4517 34.7003C14.8461 36.0882 17.5972 36.9 20.5 36.9C23.4028 36.9 26.1539 36.0882 28.5483 34.7003C28.2459 33.334 27.4869 32.1114 26.3965 31.2342C25.3062 30.357 23.9494 29.8775 22.55 29.8746H18.45C17.0505 29.8771 15.6936 30.3565 14.6031 31.2338ZM28.2238 27.494C29.9048 28.6127 31.2185 30.2024 32.0005 32.0641C35.0079 29.0731 36.9 24.9608 36.9 20.5C36.9 11.6091 29.3908 4.1 20.5 4.1C11.6091 4.1 4.1 11.6091 4.1 20.5C4.1 24.9608 5.99215 29.0731 8.9995 32.0641C9.78146 30.2024 11.0952 28.6127 12.7761 27.494C14.4571 26.3753 16.4308 25.7772 18.45 25.7746H22.55C24.5692 25.7772 26.5429 26.3753 28.2238 27.494ZM12.3 16.4C12.3 11.726 15.826 8.19996 20.5 8.19996C25.174 8.19996 28.7 11.726 28.7 16.4C28.7 21.074 25.174 24.6 20.5 24.6C15.826 24.6 12.3 21.074 12.3 16.4ZM16.4 16.4C16.4 18.8149 18.0851 20.5 20.5 20.5C22.9149 20.5 24.6 18.8149 24.6 16.4C24.6 13.9851 22.9149 12.3 20.5 12.3C18.0851 12.3 16.4 13.9851 16.4 16.4Z"
            fill="#7EC3FF"
          />
        </svg>
        <p class="user-email">{{ user.email }}</p>
        <transition name="fade">
          <div
            v-if="showToolTip"
            class="profile-tooltip"
            @mouseleave="showToolTip = false"
          >
            <p>First</p>
            <p>Настройки</p>
            <p @click="logout">Выход</p>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Menu",
  props:{
    menuShow:{
      default:undefined
    },
  },
  data: () => ({
    showToolTip: false,
    displayNumber: 0,
    interval: false,
  }),
  methods: {
    ...mapMutations(["setShowBasket", "setUser"]),
    logout() {
      this.setUser(null);
      sessionStorage.clear();
      this.$router.push({name:'login'})
    },
    tooltipShow() {
      this.showToolTip = !this.showToolTip;
    },
  },
  computed: {
    ...mapGetters(["basket", "user"]),
    cartPrice() {
      let initValue = 0;
      const reducer = (accumulator, item) => accumulator + item.price;
      return this.basket.items.reduce(reducer, initValue);
    },
  },
  watch: {
    cartPrice() {
      clearInterval(this.interval);
      if (this.number == this.displayNumber) {
        return;
      }
      this.interval = window.setInterval(
        function () {
          if (this.displayNumber !== this.cartPrice) {
            let change = (this.cartPrice - this.displayNumber) / 10;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.displayNumber = this.displayNumber + change;
          }
        }.bind(this),
        20
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/style";
.header-right {
  display: flex;
  align-items: center;
  .cart-icon {
    display: flex;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 20px;
  }
  .price {
    position: absolute;
    min-width: 100px;
    right: 75px;
    color: #7ec3ff;
    background: $main-color;
    padding: 5px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;
  }
}
.cart-item {
  transition: all 0.2s;
}
.cart-icon path {
  transition: all 0.2s;
}
.cart-icon:hover .cart-item {
  stroke: $second-color;
}
.cart-like {
  cursor: pointer;
  &:hover path {
    fill: $second-color;
  }
  & path {
    transition: all 0.2s;
  }
}
.cart-user {
  cursor: pointer;
  transition: all 0.3s 0.4s;
  &:hover path {
    fill: $second-color;
  }
  & path {
    transition: all 0.2s;
  }
}
.user-wrapper {
  background: $main-color;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}
.user-email {
  margin-left: 10px;
  right: 10px;
  color: #7ec3ff;
  font-size: $third-font;
  cursor: pointer;
}
.profile-tooltip {
  position: absolute;
  right: 0;
  top: 55px;
  width: 100%;
  background: $main-color;
  border-radius: 10px;
  padding: 10px;
  color: $third-text;
  cursor: pointer;
  & p {
    transition: 0.3s;
    padding: 5px;
  }
  & p:hover {
    color: $second-text;
  }
}
.email-enter-active,
.email-leave-active {
  transition: all 0.5s;
}
.email-enter, .email-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
