<template>
  <div class="container">
    <img class="img" src="../assets/slide2.jpg" alt="bg" />
    <h3 class="title">Авторизация</h3>
    <div
      :class="{ danger: errors.login }"
      :style="{ transition: '.3s', color: errors.login ? 'red' : 'black' }"
    >
      Login
    </div>
    <input class="input" v-model="login" type="text" />
    <span :class="{ danger: errors.pass }">Login</span>
    <input class="input" v-model="pass" type="password" />
    <button class="btn" @click="loginBtn">Вход</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Auth",
  data: () => ({
    errors: {
      login: false,
      pass: false,
    },
    login: "",
    pass: "",
  }),
  watch: {
    errors: {
      handler() {
        setTimeout(() => {
          this.errors.login = false;
          this.errors.pass = false;
        }, 2000);
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations(["setNotification"]),
    loginBtn() {
      if (this.errors.login || this.errors.pass) return;
      if (!this.login.length && !this.pass.length) {
        this.setNotification({ show: true, text: "Введите корректные данные" });
        this.errors.login = true;
        this.errors.pass = true;
        return;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 450px;
  margin: 0 auto;
  border-radius: 20px;
  background: #ffffff;
  padding: 250px 25px 25px;
  position: relative;
}
.btn {
  width: 100%;
}
.img {
  height: 250px;
  border-radius: 20px 20px 0 0;
}
.danger {
  animation: danger 0.4s linear 1;
}
@keyframes danger {
  33% {
    transform: translateX(10px);
  }
  66% {
    transform: translateX(-10px);
  }
  99% {
    transform: translateX(0);
  }
}
</style>
