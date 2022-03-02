export default {
    data() {
        return {
            customTableData: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 1,
                },
                {
                    id: '2',
                    image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 2,
                },
                {
                    id: '3',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Не показывать',
                    count: 3,
                },
            ],
            standartTableData: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 4,
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
                    count: 5,
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
                    id: '56',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 6,
                    subcategory: [
                        {
                            id: '31',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
            ],
            selectList: [{
                value: 'Option1',
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }, {
                value: 'Option4',
                label: 'Option4'
            }, {
                value: 'Option5',
                label: 'Option5'
            }, {
                value: 'Option6',
                label: 'Option6'
            }, {
                value: 'Option7',
                label: 'Option7'
            }, {
                value: 'Option8',
                label: 'Option8'
            }],
            selectValue: '',
            searchValue: ''
        }
    },
    methods: {
        tableRowClassName({row}) {
            if (!row.image) {
                return 'warning-row body-14-reg'
            }
            return 'body-14-reg'
        },
        openCategory(id) {
            this.$router.push({ path: `catalog/category/${id}`});
        },
        movePosition() {
            this.$prompt('Переместить на позицию',  {
                confirmButtonText: 'Переместить',
                inputPattern: /^[0-9]+$/,
                customClass: 'position-modal',
                cancelButtonClass: 'cancel',
                confirmButtonClass: 'confirm',
                center: true
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your position is:' + value
                });
            })
        },
        deleteCategory() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранные категории?', 'Удалить категорию?',  {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your delete' + value
                });
            })
        }
    }
}