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
    methods: {
        tableRowClassName({row}) {
            if (!row.image) {
                return 'warning-row'
            }
        },
        open() {
            this.$prompt('Переместить на позицию',  {
                confirmButtonText: 'Переместить',
                inputPattern: /^[0-9]+$/,
                customClass: 'position-modal',
                cancelButtonClass: 'cancel',
                confirmButtonClass: 'true',
                center: true
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your position is:' + value
                });
            })
        }
    }
}