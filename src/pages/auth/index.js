export default {
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      loading: false,
      rules: {
        login: [
          { required: true, message: 'Поле Логин не может быть пустым', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Поле Пароль не может быть пустым', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    login() {
      this.loading = true

      this.$store.dispatch('user/auth', this.form).then(() => {
        this.$router.push('/')
      }).catch(e => {
        this.$utils.addServerErrors(e, this.errors)
      }).finally(() => {
        this.loading = false
      })
    }
  },
}