export default {
  data() {
    return {
      loading: true,
    }
  },
  created() {
    this.getInfo()
  },
  computed: {
    info() {
      return this.$store.getters[`${this.$route.name}/info`];
    }
  },
  methods: {
    async getInfo() {
      this.loading = true;
      const action = `${this.$route.name}/getInfo`;
      try { await this.$store.dispatch(action, this.$route.params.id) }
      finally { this.loading = false }
    },
    back() {
      this.$router.push({ path: `/${this.$route.name}` });
    },
  },
}