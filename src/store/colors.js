import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        colors: null,
        color: null,
        colorList: [], // список приходящих цветов в селект
        newColor: {
            title: '',
            hex: '',
            productColorIds: []
        },
        selectColorList: [], // лист цветов в выпадающем списке
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
        },
        colorList(state) {
            return state.colorList
        },
    },
    mutations: {
        setColors(state, data) {
            state.colors = data.list;
        },
        setColor(state, data) {
            state.color = data;
        },
        setColorList(state, data) {
            state.colorList = data;
        },
        setSelectColorList(state, data) {
            state.selectColorList = data.list;
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
            data.hex = `#${data.hex}`
            commit("setColor", data);
            let productColors = data.productColors.map(elem => elem.id)
            commit("setColorList", productColors);
        },
        async getProductsColor({ commit, search }) {
            let { data } = await Http.post('/products/colors/search', search);
            commit("setSelectColorList", data);
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