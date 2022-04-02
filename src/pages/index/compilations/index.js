import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
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
    // отслеживаем три символа после которых начинается поиск
    watch: {
        searchValue(newValue, oldValue) {
            if (String(newValue).length > 2) {
                this.getListSearch()
            }
            if (String(newValue).length === 2 && String(oldValue).length === 3) {
                this.getList()
            }
        }
    },
    methods: {
        deleteCompilation(id) {
            this.$confirm('Вы уверены, что хотите удалить выбранную подборку?', 'Удалить подборку?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(() => {
                this.deleteItem(id)
                this.$message({
                    type: 'success',
                    message: 'Подборка успешно удалена'
                });
            })
        },
        async getListSearch() {
            this.loading = true;
            const action = `${this.$route.name}/getList`;
            let params = {...this.meta, ...{search: this.searchValue}}
            try { await this.$store.dispatch(action, params)}
            finally { this.loading = false }
        },
        async changeStatus(status) {
            this.loading = true;
            const action = `${this.$route.name}/changeStatus`;
            let params = {
                itemIds: this.listRemoveCompilations.map(elem => elem.id),
                status: status
            }
            try { await this.$store.dispatch(action, params)}
            finally {
                this.loading = false
                this.dialogStatusVisible = false
                this.getList()
            }
        },
        toggleSelection() {
            this.$refs.listRemoveCompilations.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveCompilations = val;
        },
        ending(value, str) {
            let ending = str;
            value = +value.toString().split('').pop()
            switch (true) {
                case value === 1:
                    ending += "ка";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "ки";
                    break;
                case value > 4 &&
                value < 9:
                    ending += "ок";
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
        // closeToggleStatus() {
        //     this.clear()
        //     this.dialogStatusVisible = false
        // },
        changeAllStatus(status) {
            this.changeStatus(status)
        }
    }
}