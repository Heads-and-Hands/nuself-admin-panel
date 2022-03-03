import Http from '@/services/http'

export default ({
  namespaced: true,
  state: {
    brands: null,
  },
  getters: {
    brands(state) {
      return state.brands;
    },
    meta(state) {
      return state.meta;
    }
  },
  mutations: {
    setBrands(state, data) {
      state.brands = data;
    },
  },
  actions: {
    brands({ dispatch }, params) {
      let url = `brands/search`;
      const urlParams = [];

      Object.keys(params).forEach((key) => {
        urlParams.push(`${key}=${params[key]}`);
      });

      if (urlParams.length) {
        url = url + "?" + urlParams.join("&");
      }

      return Http.post('brands/search', params).then(({ data }) => {
        console.log(data);
      })
    },
  },
})
