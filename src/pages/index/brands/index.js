export default {
  data() {
    return {
      searchParams: {
        search: "",
        status: ""
      },
      // todo inject actual statuses
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
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      }, {
        id: '2016',
        image: 'California',
        name: 'Tom',
        status: 'Los Angeles',
        description: 'No. 189, Grove St, Los Angeles',
      },]
    }
  }
}