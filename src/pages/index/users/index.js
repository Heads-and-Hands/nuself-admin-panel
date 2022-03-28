import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
            tableSales: [
                {
                    id: '163',
                    name: 'Название скидки',
                    role: 'Администратор',
                    status: 'active',
                    email: 'ivanov@gmail.com',
                },
                {
                    id: '163',
                    name: 'Название скидки',
                    role: 'Администратор',
                    status: 'Активен',
                    email: 'ivanov@gmail.com',
                },
                {
                    id: '163',
                    name: 'Название скидки',
                    role: 'Администратор',
                    status: 'Активен',
                    email: 'ivanov@gmail.com',
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
            text = text + ` ${this.listRemoveSales.length} ${this.ending(this.listRemoveSales.length, 'пользовател')}`
            return text
        }
    },
    methods: {
        deleteBanner() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранного пользователя?', 'Удалить пользователя?',  {
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
        openPage(id) {
            this.$router.push({ path: `users/user/${id}`});
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
                    ending += "ей";
                    break;
                case value === 1:
                    ending += "ь";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "я";
                    break;
                default:
                    ending += "ей";
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