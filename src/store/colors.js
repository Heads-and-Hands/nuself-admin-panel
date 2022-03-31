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
    },
    getters: {
        list(state) {
            return state.colors;
        },
        info(state) {
            return state.color;
        }
    },
    mutations: {
        setColors(state, data) {
            state.colors = data.list;
        },
        setColor(state, data) {
            state.color = data;
        },
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
        }
    },
})