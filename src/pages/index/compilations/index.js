import saveNotification from "@/components/save-notification/save-notification.vue"

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
            listRemoveBanner: [],
            searchValue: ''
        }
    },
    components: {
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveBanner.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveBanner.length} ${this.ending(this.listRemoveBanner.length, 'подбор')}`
            return text
        }
    },
    methods: {
        deleteBanner() {
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
            this.$refs.listRemoveBanner.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveBanner = val;
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
    }
}