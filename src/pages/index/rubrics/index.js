export default {
    data() {
        return {
            rubricsData: [
                {
                    id: '1639',
                    name: 'Название',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяжки и защиты. ',
                    count: '1',
                },
                {
                    id: '1640',
                    name: 'Название',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяжки и защиты. ',
                    count: '1',
                },
                {
                    id: '1641',
                    name: 'Название',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяжки и защиты. ',
                    count: '2',
                },
                {
                    id: '1642',
                    name: 'Название',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяжки и защиты. ',
                    count: '3',
                },
            ],
            ordersTable: [],
            showPopupPosition: false
        }
    },
    methods: {
        openRubricsPage(id) {
            this.$router.push({ path: `rubrics/rubric/${id}`});
        },
        handleSelectionChange(val) {
            this.ordersTable = val;
        },
        deleteRubrics() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранную рубрику?', 'Удалить рубрику?',  {
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
        },
    }
}