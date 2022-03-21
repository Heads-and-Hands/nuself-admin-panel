import Http from '@/services/http'

export default ({
    namespaced: true,
    actions: {
        getCustom({ commit }, params) {
            let url = `category/custom`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            return Http.post('category/custom', params).then(({ data }) => {
                return data
            })
        },
        getStandard({ commit }, params) {
            let url = `category/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            return Http.post('category/search', params).then(({ data }) => {
                return data
            })
        },
        getCategoriesData({ commit }, id) {
            return Http.post(`/category/${id}`).then(({ data }) => {
                commit('setCategory', data);
            })
        }
    },
})