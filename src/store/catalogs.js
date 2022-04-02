import Http from '@/services/http'
export default ({
    namespaced: true,
    state: {
        categories: null,
        category: null,
    },
    getters: {
        list(state) {
            return state.categories;
        },
        info(state) {
            return state.category;
        }
    },
    mutations: {
        setCategories(state, data) {
            state.categories = data.list;
        },
        setCategory(state, data) {
            state.category = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            // потом будет get запрос category/standard

            let url = `category/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('category/search', params);
            commit("setCategories", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/category/${id}`);
            commit("setCategory", data);
        },
    },
})
