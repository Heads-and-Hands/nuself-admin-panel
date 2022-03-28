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
            list: [
                {
                    id: '1639',
                    name: 'Название',
                    status: 'active',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке.' +
                        ' Капюшон дополнен шнуром для дополнительной утяжки и защиты. ',
                    count: '1',
                },
                {
                    id: '1640',
                    name: 'Название',
                    status: 'inactive',
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
            changePosition: null,
            dialogStatusVisible: false,
            moveCategory: {}
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
        toggleStatus,
        saveNotification,
        changePositionModal
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
            console.log('elem', elem)
            this.moveCategory = elem
            this.showPopupPosition = true
        },
        closeChangePosition() {
            this.showPopupPosition = false
            this.moveCategory = {}
        }
    }
}