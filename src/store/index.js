import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    items: null,
    basket: {
      show: false,
      items: [],
    },
    purchases: [],
    favorites: [],
    modals: {
      notification: {
        show: false,
        text: null,
        type: "danger",
      },
      loader: {
        show: false,
      },
    },
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    setItems: (state, payload) => (state.items = payload),
    clearBasket: ({ basket }) => (basket.items = []),
    setShowBasket: ({ basket }, payload) => (basket.show = payload),
    setItemBasket: ({ basket }, payload) => {
      basket.items.push(payload);
    },
    deleteItemBasket: ({ basket }, payload) => {
      basket.items = basket.items.filter((item) => item.id !== payload.id);
    },
    setNotification: ({ modals }, payload) => {
      modals.notification = payload;
    },
    setLoader: ({ modals }, payload) => {
      modals.loader = payload;
    },
  },
  getters: {
    user: (state) => state.user,
    items: (state) => state.items,
    basket: (state) => state.basket,
    loader: (state) => state.modals.loader,
    notification: (state) => state.modals.notification,
    purchases: (state) => state.purchases,
    favorites: (state) => state.favorites,
  },
  actions: {},
  modules: {},
});
