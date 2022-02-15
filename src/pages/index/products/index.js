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
  }
}