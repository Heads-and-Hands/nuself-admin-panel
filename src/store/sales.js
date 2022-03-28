import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        sales: null,
        sale: null,
    },
    getters: {
        list(state) {
            return state.sales;
        },
        info(state) {
            return state.sale;
        }
    },
    mutations: {
        setSales(state, data) {
            state.sales = data.list;
        },
        setSale(state, data) {
            state.sale = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `sales`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.get('sales');
            commit("setSales", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/sales/${id}`);
            commit("setSale", data);
        }
    },
})