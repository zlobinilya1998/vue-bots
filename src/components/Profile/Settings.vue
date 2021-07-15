<template>
  <div v-if="user" class="settings">
    <h3 class="settings-title">Настройка профиля</h3>
    <input type="file" ref="file" @change="selectFile" />
    <button @click="uploadImg">Отправить</button>
    <div
      :style="{ height: height.password ? `${height.password}px` : '20px' }"
      class="settings-item"
    >
      <div class="left">
        <p class="settings-item-title" v-if="!showInput.password">Пароль</p>
        <div v-else>
          <p>Старый пароль</p>
          <input v-model="inputs.password" class="input" type="password" />
          <p>Новый пароль</p>
          <input class="input" type="password" />
          <p>Повторите новый пароль</p>
          <input v-model="inputs.confPassword" class="input" type="password" />
        </div>
      </div>
      <div class="right">
        <p class="change" @click="showPassword">Изменить</p>
      </div>
    </div>
    <div
      :style="{ height: height.email ? `${height.email}px` : '20px' }"
      class="settings-item"
    >
      <div v-if="!showInput.email" class="left">
        <p class="settings-item-title">Электронная почта</p>
        <p v-if="user.email" class="user-email">{{ user.email }}</p>
      </div>
      <div v-else class="left">
        <div>
          <p>Новая почта</p>
          <div :style="{ position: 'relative' }">
            <input v-model="inputs.email" class="input" type="email" />
            <transition name="fade">
              <button
                class="btn"
                :style="{
                  position: 'absolute',
                  top: '0',
                  right: '-75px',
                  margin: '0',
                  width: '60px',
                  height: '100%',
                  borderRadius: '10px',
                }"
                v-if="inputs.email"
                @click="changeEmail"
              >
                Ок
              </button>
            </transition>
          </div>
        </div>
      </div>
      <div class="right">
        <p class="change" @click="showEmail">Изменить</p>
      </div>
    </div>
    <div
      :style="{ height: height.phone ? `${height.phone}px` : '20px' }"
      class="settings-item"
    >
      <div class="left">
        <p class="settings-item-title" v-if="!showInput.phone">
          Номер телефона
        </p>
        <p v-if="user.phone || !showInput.phone" class="user-phone">
          {{ user.phone }}
        </p>
        <div v-else>
          <p>Новый номер</p>
          <div :style="{ position: 'relative' }">
            <input v-model="inputs.phone" class="input" type="text" />
            <transition name="fade">
              <button
                class="btn"
                :style="{
                  position: 'absolute',
                  top: '0',
                  right: '-75px',
                  margin: '0',
                  width: '60px',
                  height: '100%',
                  borderRadius: '10px',
                }"
                v-if="inputs.phone"
                @click="changePhone"
              >
                Ок
              </button>
            </transition>
          </div>
        </div>
      </div>
      <div class="right">
        <p class="change" @click="showPhone">
          {{ user.phone ? "Изменить" : "Привязать" }}
        </p>
      </div>
    </div>
    <p class="no-phone" v-if="!user.phone">У вас еще не привязан телефон</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Settings",
  data: () => ({
    nameInput: "",
    height: {
      password: "",
      email: "",
      phone: "",
    },
    inputs: {
      password: "",
      confPassword: "",
      email: "",
      phone: "",
    },
    showInput: {
      password: false,
      email: false,
      phone: false,
    },
    loading: false,
    file: null,
  }),
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    uploadImg() {
      const formData = new FormData();
      formData.append("file", this.file);
      this.$axios
        .post("upload", formData)
        .then((res) => {
          this.setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showPassword() {
      if (this.showInput.password) {
        this.height.password = null;
        this.showInput.password = false;
      } else {
        this.height.password = "230";
        this.showInput.password = true;
      }
    },
    showEmail() {
      if (this.showInput.email) {
        this.height.email = null;
        this.showInput.email = false;
      } else {
        this.height.email = "80";
        this.showInput.email = true;
      }
    },
    showPhone() {
      if (this.showInput.phone) {
        this.height.phone = null;
        this.showInput.phone = false;
      } else {
        this.height.phone = "80";
        this.showInput.phone = true;
      }
    },
    changeEmail() {
      this.$axios
        .put("user/email", { email: this.inputs.email })
        .then((res) => {
          console.log(res);
          this.showEmail();
          this.inputs.email = "";
          this.setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changePhone() {
      this.$axios
        .put("user/phone", { phone: this.inputs.phone })
        .then((res) => {
          console.log(res);
          this.showPhone();
          this.inputs.phone = "";
          this.setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.settings {
  position: relative;
  height: 100%;
  padding-bottom: 80px;
  &-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
    object-fit: cover;
  }
  &-title {
    padding-bottom: 10px;
    border-bottom: 1px solid $five-color;
    color: $third-text;
  }
  &-item {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: $third-text;
    font-weight: 400;
    transition: all 0.3s;
    &-title {
      min-width: fit-content;
    }
    .left {
      display: flex;
      flex: 1;
      justify-content: space-between;
      .user-email {
        color: $second-text;
        padding: 0 15px;
        cursor: pointer;
        text-decoration: underline;
      }
      .user-phone {
        color: $second-text;
        padding: 0 15px;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .change {
        cursor: pointer;
        align-self: flex-start;
        &:hover {
          font-weight: bolder;
        }
      }
    }
  }
}
.no-phone {
  margin: 10px 0 0 10px;
  color: $third-text;

}
.input {
  background: $third-color;
  border-radius: 10px;
  height: 35px;
  margin: 10px 0;
}
</style>
