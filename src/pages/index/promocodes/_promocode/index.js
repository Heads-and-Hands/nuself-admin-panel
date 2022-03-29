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
                    type: 'ordinalPurchase',
                    title: 'Первая покупка'
                },
                {
                    type: 'registration',
                    title: 'Регистрация'
                }
            ],
            selectCondition: '',
            dialogStatusVisible: false,
            isSaveChange: false,
            startDate: '',
            endDate: ''
        }
    },
    created() {
        this.createDate()
    },
    computed: {
        isDateType() {
             if (this.info && this.info.conditions) {
                 return this.info.conditions[0].type === 'date'
             }
        },
    },
    watch: {
        isDateType(value) {
            if (this.info && this.info.conditions) {
                if (value) {
                    this.createDate()
                    return this.info.conditions[0].params = {
                        startDate: '',
                        endDate: ''
                    }
                } else {
                    delete this.info.conditions[0].params
                }
            }
        }
    },
    methods: {
        async putInfo() {
            this.loading = true;
            const action = `${this.$route.name}s/putInfo`;
            if (this.isDateType) {
                this.info.conditions[0].params.startDate = this.startDate
                this.info.conditions[0].params.endDate = this.endDate
            }
            const body = {
                id: this.$route.params.id,
                data: this.info
            }
            try { await this.$store.dispatch(action, body) }
            finally {
                this.getInfo()
            }
        },
        goToBack() {
            this.$router.push({ path: `/promocodes` });
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
            this.putInfo()
            this.isSaveChange = false
        },
        changeStatus(status) {
            if (status) {
                this.info.status = status
            }
            this.dialogStatusVisible = false
        },
        changeSale(value) {
            let newSale = value.replace(/%/gi, '').replace(/[^0-9]/, '')
            if (newSale > 0 && newSale <= 100) {
                this.info.sale = newSale
            }
        },
        createDate() {
            if (this.isDateType) {
                this.startDate = this.info.conditions[0].params ? this.info.conditions[0].params.startDate : ''
                this.endDate = this.info.conditions[0].params ? this.info.conditions[0].params.endDate : ''
            }
        },
        clear() {
            if (this.isDateType) {
                this.startDate = this.info.conditions[0].params.startDate
                this.endDate = this.info.conditions[0].params.endDate
            }
        }
    },
}