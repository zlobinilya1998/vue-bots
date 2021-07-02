<template>
  <div class="container" :style="{ height: curHeight + 'px' }">
    <img class="img" src="../assets/login.jpg" alt="bg" />
    <transition name="fade">
      <svg
        v-if="step"
        @click="stepBack"
        :style="{ position: 'absolute', left: '25px', cursor: 'pointer' }"
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
    <h3 class="title">{{ step === 0 ? "Авторизация" : "Регистрация" }}</h3>
    <div key="first" v-if="step === 0">
      <div :style="{ margin: '35px 0 0' }">
        <div :style="{ position: 'relative', marginTop: '10px' }">
          <div
            class="text"
            :class="{ danger: errors.login }"
            :style="{ transition: '.3s', color: errors.login ? 'red' : '' }"
          >
            Логин
          </div>
          <input class="input" v-model="login" type="text" />
        </div>
        <div :style="{ position: 'relative', marginTop: '20px' }">
          <div
            class="text"
            :class="{ danger: errors.pass }"
            :style="{ transition: '.3s', color: errors.login ? 'red' : '' }"
          >
            Пароль
          </div>
          <input class="input" v-model="pass" type="password" />
        </div>
      </div>
    </div>
    <div key="second" v-if="step === 1">
      <div :style="{ margin: '35px 0 0' }">
        <div :style="{ position: 'relative', marginTop: '10px' }">
          <div class="text">Логин</div>
          <input class="input" v-model="regForm.login" type="text" />
        </div>
        <div :style="{ position: 'relative', marginTop: '20px' }">
          <div class="text">Почта</div>
          <input class="input" v-model="regForm.email" type="email" />
        </div>
        <div :style="{ position: 'relative', marginTop: '20px' }">
          <div class="text">Пароль</div>
          <input class="input" v-model="regForm.pass" type="password" />
        </div>
        <div :style="{ position: 'relative', marginTop: '20px' }">
          <div class="text">Повторите пароль</div>
          <input
            minlength="4"
            class="input"
            v-model="regForm.confPass"
            type="password"
          />
        </div>
      </div>
    </div>
    <transition-group name="fade">
      <div key="first" class="bottom-btn" v-if="step === 0">
        <button class="btn" @click="loginBtn">Вход</button>
        <p
          class="step-btn"
          @click="
            step = 1;
            curHeight = 700;
          "
          :style="{ position: 'absolute', bottom: '-35px' }"
        >
          Регистрация
        </p>
      </div>
      <div key="second" class="bottom-btn" v-else-if="step === 1">
        <button class="btn">Зарегистрироваться</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Auth",
  data: () => ({
    step: 0,
    curHeight: 650,
    regForm: {
      login: "",
      pass: "",
      confPass: "",
      email: "",
    },
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
    stepBack(){
      if (!this.step) return;
      this.curHeight = 650;
      this.step -= 1
    },
    loginBtn() {
      if (this.errors.login || this.errors.pass) return;
      if (!this.login.length && !this.pass.length) {
        this.setNotification({
          show: true,
          text: "Введите корректные данные",
          type: "danger",
        });
        this.errors.login = true;
        this.errors.pass = true;
        return;
      }
    },
  },
  mounted() {
    document.querySelector(".app").style.padding = "40px 0";
  },
  beforeDestroy() {
    document.querySelector(".app").style.padding = "85px 0";
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
  box-shadow: 1px 4px 14px 0px rgba(34, 60, 80, 0.2);
  transition: 0.4s;
}
.title {
  text-align: center;
  color: #a5d364;
  font-weight: bolder;
  font-size: 24px;
}
.text {
  color: #a5d364;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: -8px;
  left: 10px;
}
.btn {
  width: 100%;
}
.step-btn {
  font-size: 21px;
  color: #a5d364;
  cursor: pointer;
}
.img {
  height: 225px;
  border-radius: 20px 20px 0 0;
}
.danger {
  animation: danger 0.4s linear 1;
}
.input {
  margin: 10px 0;
}
.bottom-btn {
  position: absolute;
  left: 25px;
  right: 25px;
  bottom: 50px;
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
