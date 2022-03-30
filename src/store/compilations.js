import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        compilations: null,
        compilation: null,
        products: null
    },
    getters: {
        list(state) {
            return state.compilations;
        },
        info(state) {
            return state.compilation;
        }
    },
    mutations: {
        setCompilations(state, data) {
            state.compilations = data.list;
        },
        setCompilation(state, data) {
            state.compilation = data;
        },
        setProducts(state, data) {
            state.products = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `compilations/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('compilations/search', params);
            commit("setCompilations", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/compilations/${id}`);
            commit("setCompilation", data);
        },
        async getProducts({ commit }, params) {
            let url = `compilations/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.get(`/compilations/${params.id}/products`);
            commit("setProducts", data);
        },
    },
})
