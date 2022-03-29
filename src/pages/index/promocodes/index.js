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
            listRemoveSales: [],
            searchValue: '',
            dialogStatusVisible: false,
        }
    },
    components: {
        toggleStatus,
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveSales.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveSales.length} ${this.ending(this.listRemoveSales.length, 'промокод')}`
            return text
        },
    },
    methods: {
        deleteBanner() {
            this.$confirm('Вы уверены, что хотите удалить выбранный промокод?', 'Удалить промокод?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(({value}) => {
                this.$message({
                    type: 'success',
                    message: 'Your delete' + value
                });
            })
        },
        openPage(id) {
            this.$router.push({path: `promocodes/promocode/${id}`});
        },
        toggleSelection() {
            this.$refs.listRemoveSales.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveSales = val;
        },
        ending(value, str) {
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "ов";
                    break;
                case value === 1:
                    ending += "";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "а";
                    break;
                default:
                    ending += "ов";
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
        },
        textConditions(value) {
            if (value === 'birthday') return 'День рождения'
            if (value === 'date') return 'Срок действия'
            if (value === 'first') return 'Первая покупка'
        },
    }
}