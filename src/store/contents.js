import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        contents: null,
        content: null,
    },
    getters: {
        list(state) {
            return state.contents;
        },
        info(state) {
            return state.content;
        }
    },
    mutations: {
        setContents(state, data) {
            state.contents = data.list;
        },
        setContent(state, data) {
            state.content = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `contents/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.post('contents/search', params);
            commit("setContents", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/contents/${id}`);
            commit("setContent", data);
        }
    },
})
