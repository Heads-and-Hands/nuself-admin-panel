export default {
  data() {
    return {
      list: [],
      loading: true,
      meta: {
        offset: 0,
        limit: 30,
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      const action = `${this.entity.name}/search`;
      this.$store.dispatch(action, meta).then(data => {
        this.total = data.total;
        this.list = data.data;
      }).finally(() => {
        this.loading = false;
      })
    },
  },
}
