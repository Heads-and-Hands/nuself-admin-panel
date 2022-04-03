import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        colors: null,
        color: null,
        newColor: {
            title: '',
            hex: '',
            productColorIds: ''
        },
        productsColorList: null,
    },
    getters: {
        list(state) {
            return state.colors;
        },
        info(state) {
            return state.color;
        },
        newInfo(state) {
            return state.newColor;
        }
    },
    mutations: {
        setColors(state, data) {
            state.colors = data.list;
        },
        setColor(state, data) {
            state.color = data;
        },
        setProductsColor(state, data) {
            state.productsColorList = data;
        },
        clearNewInfo(state) {
            state.newPromocode = {
                title: '',
                hex: '',
                productColorIds: ''
            }
        }
    },
    actions: {
        async getList({ commit }, params) {
            let url = `colors`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.get('colors', params);
            commit("setColors", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/colors/${id}`);
            commit("setColor", data);
        },
        async getProductsColor({ commit, search }) {
            let { data } = await Http.post('/products/colors/search', search);
            commit("setProductsColor", data);
        },
        async putInfo({ commit }, params) {
            console.log(params)
            await Http.put(`/colors/${params.id}`, params.data);
        },
        async createInfo({ commit }, body) {
            await Http.post(`/colors`, body);
            commit("clearNewInfo");
        },
        async deleteInfo({ commit }, id) {
            await Http.delete(`/colors/${id}`);
        }
    },
})