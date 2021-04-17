import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchFlag: false,
    loginFlag: false
  },
  mutations: {
    setSearchFlagTrue(state){
      state.searchFlag = true;
    },
    setSearchFlagFalse(state){
      state.searchFlag = false;
    },
    setLoginFlagTrue(state){
      state.loginFlag = true;
    },
    setLoginFlagFalse(state){
      state.loginFlag = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
