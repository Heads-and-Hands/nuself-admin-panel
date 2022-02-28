import Http from '@/services/http'

export default ({
  namespaced: true,
  state: {
    data: null,
  },
  getters: {
    role(state) {
      return state.data && state.data.role
    },
    readonly(state) {
      return state.data && state.data.role === 'EMPLOYEE'
    },
  },
  mutations: {
    setUser(state, user) {
      state.data = user
    },
  },
  actions: {
    auth({ dispatch }, data) {
      return Http.post('login', data).then(data => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.id)
        return dispatch('init')
      })
    },
  },
  modules: {
  },
})
