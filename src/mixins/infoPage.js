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
    async putInfo() {
      this.loading = true;
      const action = `${this.$route.name}s/putInfo`;
      const body = {
        id: this.$route.params.id,
        data: this.info
      }
      try { await this.$store.dispatch(action, body) }
      finally {
        this.getInfo()
      }
    },
    async createNewInfo() {
      this.loading = true;
      const action = `${this.$route.name}s/createInfo`;
      try { await this.$store.dispatch(action, this.info) }
      finally {
        this.goToBack()
      }
    },
    async deleteInfo() {
      this.loading = true;
      const action = `${this.$route.name}s/deleteInfo`;
      try { await this.$store.dispatch(action, this.$route.params.id) }
      finally {
        this.goToBack()
      }
    },
    back() {
      this.$router.push({ path: `/${this.$route.name}` });
    },
    textConditions(value) {
      switch (value) {
        case 'birthday':
          return 'День рождения'
        case 'date':
          return 'Срок действия'
        case 'ordinalPurchase':
          return 'Первая покупка'
        case 'registration':
          return 'Первая покупка'
        default:
          return ''
      }
    },
    clear() {
        this.contentEdited = false;
        this.isSaveChange = false;
    },
  },
}