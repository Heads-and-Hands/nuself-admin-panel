export default {
  data() {
    return {
      loading: true,
      meta: {
        offset: 0,
        limit: 30,
      },
    }
  },
  created() {
    this.getList()
  },
  computed: {
    list() {
      return this.$store.getters[`${this.$route.name}/list`];
    },
  },
  methods: {
    async getList() {
      this.loading = true;
      const action = `${this.$route.name}/getList`;
      try { await this.$store.dispatch(action, this.meta) }
      finally { this.loading = false }
    },
    async deleteItem(id) {
      this.loading = true;
      const action = `${this.$route.name}/deleteInfo`;
      try { await this.$store.dispatch(action, id) }
      finally {
        this.getList()
      }
    },
    openPage(path) {
      this.$router.push({ path: `${path}` });
    },
    textConditions(value) {
      switch (value) {
        case 'birthday':
          return 'День рождения'
          break;
        case 'date':
          return 'Срок действия'
          break;
        case 'ordinalPurchase':
          return 'Первая покупка'
          break;
        case 'registration':
          return 'Первая покупка'
          break;
        default:
          return ''
      }
    },
  },
}
