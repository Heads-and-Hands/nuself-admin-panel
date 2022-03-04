import Http from '@/services/http'

export default ({
  namespaced: true,
  state: {
    products: null,
    meta: null,
  },
  getters: {
    list(state) {
      return state.products;
    },
    meta(state) {
      return state.meta;
    }
  },
  mutations: {
    setProducts(state, data) {
      state.products = data.list;
      state.meta = data.meta;
    },
  },
  actions: {
    getList({ commit }, params) {
      let url = `products/search`;
      const urlParams = [];

      Object.keys(params).forEach((key) => {
        urlParams.push(`${key}=${params[key]}`);
      });

      if (urlParams.length) {
        url = url + "?" + urlParams.join("&");
      }

      return Http.post('products/search', params).then(({ data }) => {
        console.log(data);
        commit('setProducts', data);
      })
    },
  },
})
