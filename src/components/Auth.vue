<template>
  <div @keyup.enter="loginBtn">
    <div class="header-logo">
      <img class="header-img" width="40" src="../assets/logo.png" />
      <div class="logo-title-wrapper">
        <h3>VUE SNEAKERS</h3>
        <p :style="{ opacity: '.4' }">Магазин лучших кроссовок</p>
      </div>
    </div>
    <div class="container" :style="{ height: curHeight + 'px' }">
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
        <h3 class="title">
          {{ currentTitle }}
        </h3>
      </div>
      <div v-if="step === 0">
        <div :style="{ margin: '35px 0 0' }">
          <div :style="{ position: 'relative', marginTop: '10px' }">
            <div
              class="text"
              :class="{ danger: $v.auth.login.$anyDirty }"
              :style="{
                transition: '.3s',
                color:
                  $v.auth.login.$dirty && $v.auth.login.$invalid ? 'red' : '',
              }"
            >
              {{
                $v.auth.login.$dirty && $v.auth.login.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Логин"
              }}
            </div>
            <input
              :disabled="loader.show"
              class="input"
              v-model="$v.auth.login.$model"
              type="text"
            />
          </div>
          <div :style="{ position: 'relative', marginTop: '20px' }">
            <div
              class="text"
              :class="{ danger: $v.auth.password.$anyDirty }"
              :style="{
                transition: '.3s',
                color:
                  $v.auth.password.$dirty && $v.auth.password.$invalid
                    ? 'red'
                    : '',
              }"
            >
              {{
                $v.auth.password.$dirty && $v.auth.password.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Пароль"
              }}
            </div>
            <input
              class="input"
              :disabled="loader.show"
              v-model="$v.auth.password.$model"
              type="password"
            />
          </div>
        </div>
      </div>
      <div v-else-if="step === 1">
        <div :style="{ margin: '35px 0 0' }">
          <div :style="{ position: 'relative', marginTop: '10px' }">
            <div
              class="text"
              :class="{ danger: $v.regForm.login.$anyDirty }"
              :style="{
                color:
                  $v.regForm.login.$dirty && $v.regForm.login.$invalid
                    ? 'red'
                    : '',
              }"
            >
              {{
                $v.regForm.login.$dirty && $v.regForm.login.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Логин"
              }}
            </div>
            <input
              class="input"
              v-model="$v.regForm.login.$model"
              type="text"
            />
          </div>
          <div :style="{ position: 'relative', marginTop: '20px' }">
            <div
              class="text"
              :class="{ danger: $v.regForm.email.$anyDirty }"
              :style="{
                color:
                  $v.regForm.email.$dirty && $v.regForm.email.$invalid
                    ? 'red'
                    : '',
              }"
            >
              {{
                $v.regForm.email.$dirty && $v.regForm.email.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Почта"
              }}
            </div>
            <input
              class="input"
              v-model="$v.regForm.email.$model"
              type="email"
            />
          </div>
          <div :style="{ position: 'relative', marginTop: '20px' }">
            <div
              class="text"
              :class="{ danger: $v.regForm.password.$anyDirty }"
              :style="{
                color:
                  $v.regForm.password.$dirty && $v.regForm.password.$invalid
                    ? 'red'
                    : '',
              }"
            >
              {{
                $v.regForm.password.$dirty && $v.regForm.password.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Пароль"
              }}
            </div>
            <input
              class="input"
              v-model="$v.regForm.password.$model"
              type="password"
            />
          </div>
          <div
            :style="{
              position: 'relative',
              marginTop: '20px',
            }"
          >
            <div
              class="text"
              :class="{ danger: $v.regForm.confPassword.$anyDirty }"
              :style="{
                color:
                  $v.regForm.confPassword.$dirty &&
                  $v.regForm.confPassword.$invalid
                    ? 'red'
                    : '',
              }"
            >
              {{
                $v.regForm.confPassword.$dirty &&
                $v.regForm.confPassword.$invalid
                  ? "Минимальная длина 5 символов"
                  : "Повторите пароль"
              }}
            </div>
            <input
              minlength="4"
              class="input"
              v-model="$v.regForm.confPassword.$model"
              type="password"
            />
          </div>
        </div>
      </div>
      <div v-else-if="step === 2">
        <div :style="{ margin: '60px 0 0' }">
          <div :style="{ position: 'relative', marginTop: '10px' }">
            <div class="text">Напишите почту,чтобы мы отправили вам код</div>
            <input class="input" v-model="regForm.login" type="text" />
          </div>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="errors.login || errors.pass"
          :style="{
            marginTop: step === 1 ? '' : '25px',
            color: 'red',
            textAlign: 'center',
          }"
        >
          Введите корректные данные
        </div>
      </transition>
      <transition-group name="fade">
        <div key="first" class="bottom-btn" v-if="step === 0">
          <button
            class="btn"
            :class="{ error: isAuthInvalid && $v.auth.$anyDirty }"
            @click="loginBtn"
          >
            <transition-group name="fade">
              <Loader w="35" h="35" key="first" v-if="loader.show" />
              <p key="second" v-else>Вход</p>
            </transition-group>
          </button>
          <div class="step-btn-wrapper">
            <p
              class="step-btn"
              @click="
                step = 1;
                curHeight = 500;
              "
            >
              Регистрация
            </p>
            <p
              class="step-btn"
              @click="
                step = 2;
                curHeight = 300;
              "
            >
              Забыли пароль?
            </p>
          </div>
        </div>
        <div key="second" class="bottom-btn" v-else-if="step === 1">
          <button class="btn" @click="register">
            <transition-group name="fade">
              <Loader key="first" v-if="loader.show" />
              <p key="second" v-else>Зарегистрироваться</p>
            </transition-group>
          </button>
        </div>
        <div key="third" class="bottom-btn" v-else-if="step === 2">
          <button class="btn">Отправить на почту</button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapMutations, mapGetters } from "vuex";
const Loader = () => import("./Modals/Loader");
export default {
  name: "Auth",
  data: () => ({
    step: 0,
    curHeight: 400,
    auth: {
      login: "",
      password: "",
    },
    regForm: {
      login: "",
      password: "",
      confPassword: "",
      email: "",
    },
    errors: {
      login: false,
      pass: false,
    },
  }),
  components: {
    Loader,
  },
  validations: {
    auth: {
      login: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
    regForm: {
      login: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(5),
      },
      confPassword: {
        required,
        minLength: minLength(5),
      },
      email: {
        required,
        minLength: minLength(5),
      },
    },
  },
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
  computed: {
    ...mapGetters(["loader"]),
    currentTitle() {
      if (this.step === 0) return "Авторизация";
      else if (this.step === 1) return "Регистрация";
      else if (this.step === 2) return "Восстановление пароля";
      else return "";
    },
    isAuthInvalid() {
      return this.$v.auth.$invalid;
    },
    isRegInvalid() {
      return this.$v.regForm.$invalid;
    },
  },
  methods: {
    ...mapMutations(["setLoader", "setNotification", "setUser"]),
    register() {
      if (this.isRegInvalid) return;
      this.setLoader({ show: true });
      this.$axios
        .post("register", this.regForm)
        .then((res) => {
          this.setNotification({
            show: true,
            text: res.data.message,
            type: res.data.type,
          });
          setTimeout(() => {
            this.setUser(res.data.user);
            this.setLoader({ show: false });
            this.$router.push({name:"shop"})
          }, 2500);
        })
        .catch((e) => {
          this.setLoader({ show: false });
          this.setNotification({
            show: true,
            text: "Что-то пошло не так!",
            type: "danger",
          });
          console.log(e);
        });
    },
    stepBack() {
      if (!this.step) return;
      this.curHeight = 400;
      this.step = 0;
    },
    loginBtn() {
      if (this.isAuthInvalid || this.loader.show) return;
      this.setLoader({ show: true });
      this.$axios.post("login", this.auth).then((res) => {
        setTimeout(() => {
          this.setLoader({ show: false });
          this.setUser(res.data.user);
          sessionStorage.setItem(`token`,JSON.stringify(res.data.user.token));
          this.$router.push({name:"shop"})
        }, 2500);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/style";
.header-logo {
  display: flex;
  cursor: pointer;
  max-width: 450px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: $third-color;
  border-radius: 20px;
  height: 75px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:hover .header-img {
    transform: rotate(30deg);
  }
}
.header-img {
  margin-right: 15px;
  transition: 0.3s;
}
.container {
  max-width: 450px;
  border-radius: 20px;
  background: $third-color;
  padding: 25px 25px 25px;
  position: relative;
  box-shadow: 1px 4px 14px 0px rgba(34, 60, 80, 0.2);
  transition: 0.4s;
  margin: 20px auto 0;
}
.title {
  text-align: center;
  color: $second-text;
  font-weight: bolder;
  font-size: $second-font;
}
.text {
  color: $second-text;
  font-size: $four-font;
  font-weight: normal;
  position: absolute;
  top: -8px;
  left: 10px;
}
.btn {
  width: 100%;
  position: relative;
  &.error {
    background: $four-color;
  }
}
.step-btn {
  font-size: $third-font;
  color: $second-text;
  cursor: pointer;
}
.step-btn-wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -35px;
  width: 100%;
  padding: 0 10px;
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
