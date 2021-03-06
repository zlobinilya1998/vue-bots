import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuelidate from "vuelidate";
import axios from "axios";


Vue.config.productionTip = false;

const axiosConfig = {
  baseURL: 'http://localhost:3000/api/',
};

let token = JSON.parse(sessionStorage.getItem('token'))
if (token){
  axios.defaults.headers.common['auth-token'] = token;
}
Vue.prototype.$axios = axios.create(axiosConfig);

Vue.use(vuelidate);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
