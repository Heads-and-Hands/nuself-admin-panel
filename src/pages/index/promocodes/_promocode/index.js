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
            dataPicker: [],
            dataPicker2: [],
            isSaveChange: false
        }
    },
    created() {
        if (this.info && this.info.conditions) {
            this.fixData(JSON.parse(JSON.stringify(this.info.conditions[0].params)))
        }
    },
    methods: {
        async putInfo() {
            this.loading = true;
            if ( this.data && this.data.conditions && this.data.conditions[0].type === 'date') {
                this.data.conditions[0].params = {
                    startDate: this.dataPicker[0],
                    endDate: this.dataPicker[1]
                }
            } else {

            }
            const action = `${this.$route.name}s/putInfo`;
            const body = {
                id: this.$route.params.id,
                data: this.data
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
                this.data.status = status
            }
            this.dialogStatusVisible = false
        },
        change(value) {
            let newSale = value.replace(/%/gi, '').replace(/[^0-9]/, '')
            if (newSale > 0 && newSale <= 100) {
                this.data.sale = newSale
            }
        },
        fixData(params) {
            this.dataPicker = [params.startDate, params.endDate]
            this.dataPicker2 = [params.startDate, params.endDate]
        }
    },
}