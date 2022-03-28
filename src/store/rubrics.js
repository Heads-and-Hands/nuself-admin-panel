import Http from '@/services/http'

export default ({
    namespaced: true,
    state: {
        rubrics: null,
        rubric: null,
    },
    getters: {
        list(state) {
            return state.rubrics;
        },
        info(state) {
            return state.rubric;
        }
    },
    mutations: {
        setRubrics(state, data) {
            state.rubrics = data.list;
        },
        setRubric(state, data) {
            state.rubric = data;
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `rubrics/search`;
            const urlParams = [];

            Object.keys(params).forEach((key) => {
                urlParams.push(`${key}=${params[key]}`);
            });

            if (urlParams.length) {
                url = url + "?" + urlParams.join("&");
            }

            let { data } = await Http.get('rubrics', params);
            commit("setRubrics", data);
        },
        async getInfo({ commit }, id) {
            let { data } = await Http.get(`/rubrics/${id}`);
            commit("setRubric", data);
        }
    },
})