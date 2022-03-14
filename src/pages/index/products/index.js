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
      tableColumns: [
        { title: "ID", reference: "id", width: "70" },
        { title: "Фото", reference: "image", width: "90" },
        { title: "Артикул", reference: "article", width: "120" },
        { title: "Бренд", reference: "brand", width: "120" },
        { title: "Название", reference: "name", width: "170" },
        { title: "Статус", reference: "status", width: "120" },
        { title: "Цвет", reference: "color", width: "120" },
        { title: "Остатки", reference: "leftovers", width: "120" },
        { title: "Категория", reference: "category", width: "120" },
      ],
      tableData: []
    }
  },
  created() {
    console.log(this.$store.getters['products/list']);
  },
}