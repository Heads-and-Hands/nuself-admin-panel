import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        compilations: null,
        compilation: null,
        products: {},
        newCompilation: {
            description: '',
            name: '',
            previewType: 'tile',
            status: 'inactive',
        },
        newProducts: {
            list: []
        }
    },
    getters: {
        list(state) {
            return state.compilations;
        },
        info(state) {
            return state.compilation;
        },
        newInfo(state) {
            return state.newCompilation;
        },
        newProducts(state) {
            return state.newProducts;
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
        clearNewInfo(state) {
            state.newCompilation = {
                description: '',
                    name: '',
                    previewType: 'tile',
                    status: 'inactive',
            }
            state.newProducts = {
                list: []
            }
        }
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
        async putInfo({ commit }, id) {
            console.log(params)
            await Http.put(`/compilations/${params.id}`, params.data);
        },
        async createInfo({ commit }, body) {
            await Http.post(`/compilations`, body);
            commit("clearNewInfo");
        },
        async deleteInfo({ commit }, id) {
            await Http.delete(`/compilations/${id}`);
        },
        async changeStatus({ commit }, params) {
            console.log(params)
            await Http.post(`/compilations/status`, params);
        },
    },
})
