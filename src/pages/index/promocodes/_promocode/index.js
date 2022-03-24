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
            // info: {
            //     id: '1R1469',
            //     name: 'Название промокода',
            //     sale: '15%',
            //     status: 'Активен',
            //     code: '1R14AS69',
            //     condition: {
            //         type: 'date',
            //         params: {
            //             startDate: '2021-12-12',
            //             endDate: '2022-11-11'
            //         }
            //     },
            // },
            data: {},
            selectType: [
                {
                    type: 'birthday',
                    title: 'День рождения'
                },
                {
                    type: 'date',
                    title: 'Срок действия'
                },
                {
                    type: 'first',
                    title: 'Первая покупка'
                },
            ],
            dialogStatusVisible: false,
            dataPicker: [],
        }
    },
    created() {
        // поправить ошибки
        this.data = JSON.parse(JSON.stringify(this.info))
        if (this.data.conditions[0].type === 'date') {
            this.dataPicker = [this.data.conditions.params.startDate, this.data.conditions.params.endDate]
        }
    },
    computed: {
        isSaveChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
        },
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/promocodes` });
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
        },

    }
}