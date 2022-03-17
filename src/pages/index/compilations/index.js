import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    data() {
        return {
            tableCompilations: [
                {
                    id: '163',
                    name: 'Длинное название подборки',
                    previewType: 'Карусель',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяж... ',
                },
                {
                    id: '163',
                    name: 'Длинное название подборки',
                    previewType: 'Карусель',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяж... ',
                },
                {
                    id: '163',
                    name: 'Длинное название подборки',
                    previewType: 'Карусель',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяж... ',
                },
                {
                    id: '163',
                    name: 'Длинное название подборки',
                    previewType: 'Карусель',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяж... ',
                },

            ],
            dialogTablesVisible: false,
            listRemoveCompilations: [],
            searchValue: '',
            dialogStatusVisible: false
        }
    },
    components: {
        toggleStatus,
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveCompilations.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveCompilations.length} ${this.ending(this.listRemoveCompilations.length, 'подбор')}`
            return text
        }
    },
    methods: {
        deleteCompilation() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранную подборку?', 'Удалить подборку?',  {
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
        openCompilationPage(id) {
            this.$router.push({ path: `compilations/compilation/${id}`});
        },
        toggleSelection() {
            this.$refs.listRemoveCompilations.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveCompilations = val;
        },
        ending(value, str){
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "ок";
                    break;
                case value === 1:
                    ending += "ка";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "ки";
                    break;
                default:
                    ending += "ок";
                    break;
            }
            return ending;
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        clear() {
            this.$refs.listRemoveTable.clearSelection();
        },
        change() {
            console.log('change status')
            this.dialogStatusVisible = true
        },
        changeStatus() {
            console.log('change status method')
            this.clear()
            this.dialogStatusVisible = false
        },
        closeToggleStatus() {
            this.clear()
            this.dialogStatusVisible = false
        }
    }
}