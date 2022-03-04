import MixinList from '@/mixins/tableList'

export default {
  name: "brands",
  mixins: [
    MixinList
  ],
  data() {
    return {
      searchParams: {
        search: "",
        status: ""
      },
      statusList: [{
        value: 'active',
        label: 'Активный'
      }, {
        value: 'inactive',
        label: 'Не активный'
      }],
      tableColumns: [{
        title: "ID",
        reference: "id"
      },
      {
        title: "Фото",
        reference: "image"
      },
      {
        title: "Название",
        reference: "name"
      },
      {
        title: "Статус",
        reference: "status"
      },
      {
        title: "Описание",
        reference: "description"
      }],
      tableData: []
    }
  },
  created() {
    console.log(this.$store.getters['products/list']);
  },
}