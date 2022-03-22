import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        clients: null,
        client: null,
    },
    getters: {
        list(state) {
            return state.clients;
        },
        info(state) {
            return state.client;
        }
    },
    mutations: {
        setClients(state, data) {
            state.clients = data.list;
        },
        setClient(state, data) {
            state.client = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `clients/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('clients/search', params);
            commit("setClients", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/clients/${id}`);
            commit("setClient", data);
        }
    },
})
