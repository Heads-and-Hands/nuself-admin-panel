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
      tableData: [{
        id: '2016',
        image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      },]
    }
  },
  created() {
    
  },
}