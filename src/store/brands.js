import Http from '@/services/http'

export default ({
  namespaced: true,
  actions: {
    getList({ dispatch }, params) {
      let url = `brands/search`;
      const urlParams = [];

      Object.keys(params).forEach((key) => {
        urlParams.push(`${key}=${params[key]}`);
      });

      if (urlParams.length) {
        url = url + "?" + urlParams.join("&");
      }

      return Http.post('brands/search', params).data
    },
  },
})
