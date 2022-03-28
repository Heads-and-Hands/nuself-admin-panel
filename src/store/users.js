import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        users: null,
        user: null,
    },
    getters: {
        list(state) {
            return state.users;
        },
        info(state) {
            return state.user;
        }
    },
    mutations: {
        setUsers(state, data) {
            state.users = data.list;
        },
        setUser(state, data) {
            state.user = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `users/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('users/search', params);
            commit("setUsers", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/users/${id}`);
            commit("setUser", data);
        }
    },
})