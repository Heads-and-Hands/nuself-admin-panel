import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import orders from './orders';
import brands from './brands';
import colors from './colors';
import banners from './banners';
import catalog from './catalog';
import products from './products';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    brands,
    colors,
    orders,
    banners,
    catalog,
    products,
  },
})
