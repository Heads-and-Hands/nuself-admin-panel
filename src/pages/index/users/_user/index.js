import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    components: {
        saveNotification,
        toggleStatus
    },
    data() {
        return {
            complData:  {
                id: '163',
                name: 'Имя Фамилия',
                role: 'Администратор',
                status: 'Активен',
                email: 'ivanov@gmail.com',
            },
            data: {},
            selectType: [
                {
                    type: 'admin',
                    title: 'Администратор'
                },
            ],
            dialogStatusVisible: false,
        }
    },
    created() {
        this.data = JSON.parse(JSON.stringify(this.complData))
    },
    computed: {
        isSaveChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.complData)
        },
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/users` });
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.complData))
        },
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        }
    }
}