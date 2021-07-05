<template>
  <header class="header">
    <div class="header-logo" @click="$router.push({ name: 'shop' })">
      <img class="header-img" width="40" src="../assets/logo.png" />
      <div class="logo-title-wrapper">
        <h3
          :style="{
            color: $route.path === '/' ? '#9DD458' : 'black',
            transition: 'all .3s',
          }"
        >
          VUE SNEAKERS
        </h3>
        <p :style="{ opacity: '.4' }">Магазин лучших кроссовок</p>
      </div>
    </div>
    <div class="header-right">
      <transition name="fade">
        <div :style="{position:'absolute',right:'45px',display:'flex',alignItems:'center',justifyContent:'space-around',width:'160px'}" v-if="$route.fullPath !== '/purchases'">
          <div
                  @click="setShowBasket(true)"
                  class="cart-icon"
          >
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
            <p
                    v-if="cartPrice"
                    class="price"
            >
              {{ cartPrice + " руб." }}
            </p>
          </transition>
          <svg
                  @click="$router.push({ name: 'favorite' })"
                  class="cart-like"
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    :fill="$route.path === '/favorite' ? '#9DD458' : '#9B9B9B'"
                    d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
            />
          </svg>
          <svg
                  @click="$router.push({ name: 'purchases' })"
                  class="cart-user"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    :fill="$route.path === '/purchases' ? '#7EC3FF' : '#9B9B9B'"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
            />
          </svg>
        </div>
      </transition>
      <transition name="email">
        <div :style="{display:'flex',alignItems:'center'}" v-if="$route.fullPath === '/purchases'">
          <svg :style="{width:'25px',height:'25px'}" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.5C0 9.38695 9.38695 0 20.5 0C31.613 0 41 9.38695 41 20.5C41 27.0395 37.7364 32.9599 32.8 36.7442V36.9H32.5909C29.1715 39.4522 24.9833 41 20.5 41C16.0166 41 11.8285 39.4522 8.4091 36.9H8.2V36.7442C3.2636 32.9599 0 27.0374 0 20.5ZM14.6031 31.2338C13.5127 32.111 12.7538 33.3338 12.4517 34.7003C14.8461 36.0882 17.5972 36.9 20.5 36.9C23.4028 36.9 26.1539 36.0882 28.5483 34.7003C28.2459 33.334 27.4869 32.1114 26.3965 31.2342C25.3062 30.357 23.9494 29.8775 22.55 29.8746H18.45C17.0505 29.8771 15.6936 30.3565 14.6031 31.2338ZM28.2238 27.494C29.9048 28.6127 31.2185 30.2024 32.0005 32.0641C35.0079 29.0731 36.9 24.9608 36.9 20.5C36.9 11.6091 29.3908 4.1 20.5 4.1C11.6091 4.1 4.1 11.6091 4.1 20.5C4.1 24.9608 5.99215 29.0731 8.9995 32.0641C9.78146 30.2024 11.0952 28.6127 12.7761 27.494C14.4571 26.3753 16.4308 25.7772 18.45 25.7746H22.55C24.5692 25.7772 26.5429 26.3753 28.2238 27.494ZM12.3 16.4C12.3 11.726 15.826 8.19996 20.5 8.19996C25.174 8.19996 28.7 11.726 28.7 16.4C28.7 21.074 25.174 24.6 20.5 24.6C15.826 24.6 12.3 21.074 12.3 16.4ZM16.4 16.4C16.4 18.8149 18.0851 20.5 20.5 20.5C22.9149 20.5 24.6 18.8149 24.6 16.4C24.6 13.9851 22.9149 12.3 20.5 12.3C18.0851 12.3 16.4 13.9851 16.4 16.4Z" fill="#7EC3FF"/>
          </svg>
          <p class="user-email" >qwertin1998@gmail.com</p>
        </div>
      </transition>
    </div>
    <svg
      @click="showMenu"
      class="hamburger-menu"
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="3.44828" rx="1.72414" fill="#C4C4C4" />
      <rect
        y="8.27586"
        width="30"
        height="3.44828"
        rx="1.72414"
        fill="#C4C4C4"
      />
      <rect
        y="16.5517"
        width="30"
        height="3.44828"
        rx="1.72414"
        fill="#C4C4C4"
      />
    </svg>
    <transition name="menu">
      <div v-if="showMobileMenu" class="mobile-menu">
        <div
                @click="setShowBasket(true)"
                class="cart-icon mobile"
        >
          <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    class="cart-item mobile"
                    :style="{ stroke: cartPrice ? '#9dd458' : '' }"
                    d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                    stroke="#9B9B9B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            />
            <path
                    class="cart-item mobile"
                    :style="{ stroke: cartPrice ? '#9dd458' : '' }"
                    d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                    stroke="#9B9B9B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            />
            <path
                    class="cart-item"
                    :style="{ stroke: cartPrice ? '#9dd458' : '' }"
                    d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                    stroke="#9B9B9B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            />
          </svg>
          <transition name="fade">
            <p
                    v-if="cartPrice"
                    :style="{ margin: '0 30px 0 10px' }"
                    class="price"
            >
              {{ cartPrice + " руб." }}
            </p>
          </transition>
        </div>
        <svg
                @click="$router.push({ name: 'favorite' })"
                class="cart-like"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        >
          <path
                  :fill="$route.path === '/favorite' ? '#9DD458' : '#9B9B9B'"
                  d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
          />
        </svg>
        <svg
                @click="$router.push({ name: 'purchases' })"
                class="cart-user"
                :style="{ marginLeft: '30px' }"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        >
          <path
                  :fill="$route.path === '/purchases' ? '#9DD458' : '#9B9B9B'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
          />
        </svg>
      </div>
    </transition>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Header",
  data: () => ({
    showMobileMenu: false,
  }),
  methods: {
    ...mapMutations(["setShowBasket"]),
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  computed: {
    ...mapGetters(["basket"]),
    cartPrice() {
      let initValue = 0;
      const reducer = (accumulator, item) => accumulator + item.price;
      return this.basket.items.reduce(reducer, initValue);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.header {
  padding: 20px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  border-bottom: 1px solid $second-color;
  top: 0px;
  z-index: 3;
  background: $third-color;
  .hamburger-menu {
    display: none;
  }
  .mobile-menu {
    width: 150px;
    padding: 10px;
    background: red;
    position: absolute;
    right: 0;
    top: 65px;
  }
  &-logo {
    display: flex;
    cursor: pointer;
    .logo-title-wrapper {
      margin-left: 16px;
      @media (max-width: $mobile) {
        display: none;
      }
    }
    &:hover .header-img {
      transform: rotate(30deg) scale(1.2);
    }
  }
  &-img {
    transition: transform 0.3s ease;
  }
  &-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    .cart-icon {
      display: flex;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .price {
      min-width: 100px;
      position: absolute;
      right: 150px;
    }
  }
  @media (max-width: $mobile) {
    padding: 10px 25px;
    .hamburger-menu {
      display: block;
    }
    &-right {
      display: none;
    }
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
  transition: all .3s .4s;
  &:hover path {
    fill: $second-color;
  }
  & path {
    transition: all 0.2s;
  }
}
.user-email {
  margin-left: 10px;
  right: 10px;
  padding: 10px 15px;
  background: $main-color;
  color: #7EC3FF;
  font-size: $third-font;
  border-radius: 10px;
}
.menu-enter-active, .menu-leave-active {
  transition: opacity .5s;
}
.menu-enter, .menu-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.email-enter-active, .email-leave-active {
  transition: all .5s;
}
.email-enter, .email-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
