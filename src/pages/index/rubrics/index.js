import saveNotification from "@/components/save-notification/save-notification.vue"

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
            listRemoveRubrics: [],
            showPopupPosition: false,
            changePosition: null
        }
    },
    computed: {
        textNotification() {
            let text = this.listRemoveRubrics.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveRubrics.length} ${this.ending(this.listRemoveRubrics.length, 'рубрик')}`
            return text
        }
    },
    components: {
        saveNotification
    },
    methods: {
        openRubricsPage(id) {
            this.$router.push({ path: `rubrics/rubric/${id}`});
        },
        handleSelectionChange(val) {
            this.listRemoveRubrics = val;
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
        toggleSelection() {
            this.$refs.listRemoveRubrics.clearSelection();
        },
        ending(value, str){
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "";
                    break;
                case value === 1:
                    ending += "а";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "и";
                    break;
                default:
                    ending += "";
                    break;
            }
            return ending;
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        clear() {
            this.$refs.rubricsTable.clearSelection();
        },
        change() {
            console.log('change status')
            this.clear()
        }
    }
}