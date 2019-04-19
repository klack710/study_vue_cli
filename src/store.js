import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    message: '初期メッセージ'
  },
  getters: {
    count(state) {
      return state.count;
    },
    message(state) {
      return state.message;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    mutationType(state, payload) {
      state.count = payload;
    },
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    // store.dispatch('actionType', payload)で呼び出す
    actionType({ commit }, payload) {
      commit('mutationType');
    },
    doUpdate({ commit }, message) {
      commit('setMessage', { message });
    }
  }
});

export default store;
