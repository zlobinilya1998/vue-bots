import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket:{
      show:false,
      items:[],
      liked:[],
    },
    purchases:[],
    favorites:[],
    modals:{
      loader:{
        show:false,
      },
    },
  },
  mutations: {
    setShowBasket:({basket},payload) => basket.show = payload,
    setItemBasket:({basket},payload) => {
      basket.items.push(payload);
    },
    deleteItemBasket:({basket},payload) => {
      basket.items = basket.items.filter(item=>item.id !== payload.id);
    },
  },
  getters:{
    basket:state => state.basket,
    loader:state => state.modals.loader,
    purchases:state => state.purchases,
    favorites:state => state.favorites,
  },
  actions: {},
  modules: {},
});
