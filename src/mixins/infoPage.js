export default {
  data() {
    return {
      loading: true,
      contentEdited: false,
    }
  },
  created() {
    if (this.$route.params.id !== 'create') {
      this.getInfo()
    }
  },
  computed: {
    info() {
      if (this.$route.params.id !== 'create') {
        return this.$store.getters[`${this.$route.name}s/info`]
      } else {
        return this.$store.getters[`${this.$route.name}s/newInfo`]
      }
    },
  },
  watch: {
    info: {
      handler(newValue, oldValue) {
        if (this.contentEdited) {
          this.isSaveChange = true;
          console.log("edit");
        }
        this.contentEdited = true;
      },
      deep: true,
    }
  },
  methods: {
    async getInfo() {
      this.loading = true;
      const action = `${this.$route.name}s/getInfo`;
      try { await this.$store.dispatch(action, this.$route.params.id) }
      finally {
        this.loading = false
        this.isSaveChange = false
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
    clear() {
        this.getInfo()
        this.contentEdited = false;
        this.isSaveChange = false;
    },
  },
}