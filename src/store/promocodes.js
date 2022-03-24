import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        promocodes: null,
        promocode: null,
    },
    getters: {
        list(state) {
            return state.promocodes;
        },
        info(state) {
            return state.promocode;
        }
    },
    mutations: {
        setPromocodes(state, data) {
            state.promocodes = data.list;
        },
        setPromocode(state, data) {
            state.promocode = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `promocodes/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.get('promocodes', params);
            commit("setPromocodes", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/promocodes/${id}`);
            commit("setPromocode", data);
        }
    },
})