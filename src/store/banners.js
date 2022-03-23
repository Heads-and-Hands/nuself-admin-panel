import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        banners: null,
        banner: null,
    },
    getters: {
        list(state) {
            return state.banners;
        },
        info(state) {
            return state.banner;
        }
    },
    mutations: {
        setBanners(state, data) {
            state.banners = data.list;
        },
        setBanner(state, data) {
            state.banner = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `banners/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('banners/search', params);
            commit("setBanners", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/banners/${id}`);
            commit("setBanner", data);
        }
    },
})