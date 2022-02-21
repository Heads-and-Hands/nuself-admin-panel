import ElTableDraggable from "element-ui-el-table-draggable";

export default {
    data() {
        return {
            tableList: [
                {
                    title: 'ID',
                    reference: 'id'
                },
                {
                    title: 'Фото',
                    reference: 'image'
                },
                {
                    title: 'Название',
                    reference: 'name'
                },
                {
                    title: 'Статус',
                    reference: 'status'
                },
            ],
            customTableData: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '11',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '2',
                    image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '21',
                            name: 'Платья',
                            status: 'Показывать',
                        },
                        {
                            id: '22',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '3',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '31',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
            ],
            standartTableData: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '11',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '2',
                    image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '21',
                            name: 'Платья',
                            status: 'Показывать',
                        },
                        {
                            id: '22',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '3',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Показывать',
                    subcategory: [
                        {
                            id: '31',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
            ]
        }
    },
    components: {
        ElTableDraggable,
    },
    computed: {
        getFirstId() {
            console.log(this.customTableData.map(elem => elem.id))
            const IDMAP = new Map();
            this.customTableData.forEach((elem,index) => IDMAP.set(elem.id,index))
            console.log(IDMAP)
            return IDMAP
        },
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (!this.getFirstId.has(row.id)) {
                return 'warning-row'
            }
        }
        // olol(index) {
        //    console.log('boolean', !!this.getFirstId.find(elem => elem === this.customTableData[index].id))
        //     return !!this.getFirstId.find(elem => elem === this.customTableData[index].id)
        // }
    }
}