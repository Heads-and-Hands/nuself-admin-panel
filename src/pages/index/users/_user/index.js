import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    components: {
        saveNotification,
        toggleStatus
    },
    data() {
        return {
            data:  {
                id: '163',
                name: 'Имя Фамилия',
                role: 'Администратор',
                status: 'active',
                email: 'ivanov@gmail.com',
            },
            selectType: [
                {
                    type: 'admin',
                    title: 'Администратор'
                },
            ],
            dialogStatusVisible: false,
        }
    },
    computed: {
        isSaveChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
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
            this.data = JSON.parse(JSON.stringify(this.info))
        },
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        }
    }
}