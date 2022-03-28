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
      return this.$store.getters[`${this.$route.name}/info`];
    },
  },
  methods: {
    async getInfo() {
      this.loading = true;
      const action = `${this.$route.name}/getInfo`;
      try { await this.$store.dispatch(action, this.$route.params.id) }
      finally {
        this.data = this.info ? JSON.parse(JSON.stringify(this.info)) : {}
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