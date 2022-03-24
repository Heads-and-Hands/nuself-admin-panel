import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        orders: null,
        order: null,
    },
    getters: {
        list(state) {
            return state.orders;
        },
        info(state) {
            return state.order;
        }
    },
    mutations: {
        setOrders(state, data) {
            state.orders = data.list;
        },
        setOrder(state, data) {
            state.order = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `orders/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('orders/search', params);
            commit("setOrders", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/orders/${id}`);
            commit("setOrder", data);
        }
    },
})