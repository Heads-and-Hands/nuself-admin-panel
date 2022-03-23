import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    data() {
        return {
            tableSales: [
                {
                    id: '163',
                    name: 'Название скидки',
                    sale: '15%',
                    status: 'Активна',
                    validity: '15.08.21 — 15.08.21',
                    subjectType: 'Подборка',
                    subject: 'Название подборки',
                },
                {
                    id: '163',
                    name: 'Название скидки',
                    sale: '15%',
                    status: 'Активна',
                    validity: '15.08.21 — 15.08.21',
                    subjectType: 'Подборка',
                    subject: 'Название подборки',
                },
                {
                    id: '163',
                    name: 'Название скидки',
                    sale: '15%',
                    status: 'Активна',
                    validity: '15.08.21 — 15.08.21',
                    subjectType: 'Подборка',
                    subject: 'Название подборки',
                },
                {
                    id: '163',
                    name: 'Название скидки',
                    sale: '15%',
                    status: 'Активна',
                    validity: '15.08.21 — 15.08.21',
                    subjectType: 'Подборка',
                    subject: 'Название подборки',
                },
            ],
            dialogTablesVisible: false,
            listRemoveSales: [],
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
            let text = this.listRemoveSales.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveSales.length} ${this.ending(this.listRemoveSales.length, 'скид')}`
            return text
        }
    },
    methods: {
        deleteBanner() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранную скидку?', 'Удалить скидку?',  {
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
        openSalesPage(id) {
            this.$router.push({ path: `sales/sale/${id}`});
        },
        toggleSelection() {
            this.$refs.listRemoveSales.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveSales = val;
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