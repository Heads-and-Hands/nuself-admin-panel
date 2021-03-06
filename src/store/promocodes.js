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
        },
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
            let value = newPromo? 'newPromocode' : 'promocode'
            Vue.set(state[value].conditions[0], "params", {
                startDate: '',
                endDate: ''
            })
        },
        deleteDateParams(state, newPromo) {
            let value = newPromo? 'newPromocode' : 'promocode'
            Vue.delete(state[value].conditions[0], "params")
        },
        clearNewInfo(state) {
            state.newPromocode = {
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
        }
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
        async putInfo({ commit }, params) {
            console.log(params)
            await Http.put(`/promocodes/${params.id}`, params.data);
        },
        async createInfo({ commit }, body) {
            await Http.post(`/promocodes`, body);
            commit("clearNewInfo");
        },
        async deleteInfo({ commit }, id) {
            await Http.delete(`/promocodes/${id}`);
        }
    },
})