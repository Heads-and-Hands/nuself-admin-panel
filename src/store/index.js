import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import brands from './brands';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    brands,
  },
})
