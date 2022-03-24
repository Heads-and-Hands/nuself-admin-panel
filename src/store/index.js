import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import orders from './orders';
import brands from './brands';
import colors from './colors';
import banners from './banners';
import catalog from './catalog';
import clients from './clients';
import rubrics from './rubrics';
import contents from './contents';
import products from './products';
import promocodes from './promocodes';
import compilations from './compilations';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    brands,
    colors,
    orders,
    rubrics,
    clients,
    banners,
    catalog,
    products,
    contents,
    promocodes,
    compilations
  },
})
