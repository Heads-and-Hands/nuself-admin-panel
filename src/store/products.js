import Http from '@/services/http'

export default ({
  namespaced: true,
  state: {
    products: null,
    product: null,
  },
  getters: {
    list(state) {
      return state.products;
    },
    info(state) {
      return state.product;
    }
  },
  mutations: {
    setProducts(state, data) {
      state.products = data.list;
    },
    setProduct(state, data) {
      state.product = data;
    },
  },
  actions: {
    async getList({ commit }, params) {
      let url = `products/search`;
      const urlParams = [];

      Object.keys(params).forEach((key) => {
        urlParams.push(`${key}=${params[key]}`);
      });

      if (urlParams.length) {
        url = url + "?" + urlParams.join("&");
      }

      let { data } = await Http.post('products/search', params);
      commit("setProducts", data);
    },
    async getInfo({ commit }, id) {
      let { data } = await Http.get(`/products/${id}`);
      commit("setProduct", data);
    },
    async putInfo({ commit }, params) {
      console.log(params);
      await Http.put(`/products/${params.id}`, params.data);
    },
    async createInfo({ commit }, body) {
      await Http.post(`/products`, body);
      commit("clearNewInfo"); // добавить
    },
    async deleteInfo({ commit }, id) {
      await Http.delete(`/products/${id}`);
    }
  },
})
