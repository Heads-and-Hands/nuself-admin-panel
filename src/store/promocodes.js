import Http from '@/services/http'
import Vue from 'vue';

export default ({
    namespaced: true,
    state: {
        promocodes: null,
        promocode: null,
        newPromocode: {
            name: 'Название промокода',
            sale: 0,
            code: '',
            status: 'inactive',
            conditions: [
                {
                    type: 'birthday',
                }
            ],
        }
    },
    getters: {
        list(state) {
            return state.promocodes;
        },
        info(state) {
            return state.promocode;
        },
        newInfo(state) {
            return state.newPromocode;
        }
    },
    mutations: {
        setPromocodes(state, data) {
            state.promocodes = data.list;
        },
        setPromocode(state, data) {
            state.promocode = data;
        },
        addDateParams(state, newPromo) {
            Vue.set(state.promocode.conditions[0], "params", {
                startDate: '',
                endDate: ''
            })
        },
        deleteDateParams(state, newPromo) {
            Vue.delete(state.promocode.conditions[0], "params")
        },
    },
    actions: {
        async getList({ commit }, params) {
            let url = `promocodes`;
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
        },
        async putInfo({ commit }, id) {
            console.log(params)
            await Http.put(`/promocodes/${params.id}`, params.data);
        },
        async createPromocode({ commit }, body) {
            let { data } = await Http.post(`/promocodes/`, body);
            this.getInfo()
        },
        // async deletePromocode({ commit }, id) {
        //     await Http.delete(`/promocodes/${id}`);
        //     this.$router.push({ path: `/promocodes` });
        // }
    },
})