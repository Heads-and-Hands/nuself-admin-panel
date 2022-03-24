import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import changePositionModal from "@/components/modals/change-position-modal/change-position-modal.vue"
import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
            showPopupPosition: false,
            dialogStatusVisible: false,
            moveCategory: {},
            standardTableData: [],
            listRemoveCatalog: [],
            loading: true,
            meta: {
                offset: 0,
                limit: 30,
            },
        }
    },
    components: {
        saveNotification,
        toggleStatus,
        changePositionModal
    },
    computed: {
        textNotification() {
            let text = this.listRemoveCatalog.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveCatalog.length} ${this.ending(this.listRemoveCatalog.length, 'категор')}`
            return text
        },
    },
    methods: {
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
        },
        ending(value, str){
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "ий";
                    break;
                case value === 1:
                    ending += "ия";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "ии";
                    break;
                default:
                    ending += "ий";
                    break;
            }
            return ending;
        },
        handleSelectionChange(val) {
            this.listRemoveCatalog = val;
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
        move(elem) {
            console.log('id: '+ this.moveCategory.id, 'new position: ' + elem)
            this.closeChangePosition()
        },
        openPositionModal(elem) {
            this.showPopupPosition = true
            this.moveCategory = elem
        },
        closeChangePosition() {
            this.showPopupPosition = false
            this.moveCategory = {}
        }
    }
}