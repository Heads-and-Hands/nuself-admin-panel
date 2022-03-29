export default {
  data() {
    return {
      loading: true,
      data: {}
    }
  },
  created() {
    this.getInfo()
  },
  computed: {
    info() {
      let info = this.$store.getters[`${this.$route.name}s/info`]
      this.data = info ? JSON.parse(JSON.stringify(info)) : {}
      return info
    },
  },
  methods: {
    async getInfo() {
      this.loading = true;
      const action = `${this.$route.name}s/getInfo`;
      try { await this.$store.dispatch(action, this.$route.params.id) }
      finally {
        this.loading = false
      }
    },
    back() {
      this.$router.push({ path: `/${this.$route.name}` });
    },
    textConditions(value) {
      if (value === 'birthday') return 'День рождения'
      if (value === 'date') return 'Срок действия'
      if (value === 'first') return 'Первая покупка'
    },
  },
}