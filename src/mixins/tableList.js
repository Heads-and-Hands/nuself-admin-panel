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
      this.loading = true;
      const action = `${this.$route.name}/getList`;
      this.$store.dispatch(action, this.meta).then(data => {
        this.total = data.total;
        this.list = data.data;
      }).finally(() => {
        this.loading = false;
      })
    },
  },
}
