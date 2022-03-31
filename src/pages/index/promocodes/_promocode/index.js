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
        }
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/promocodes` });
        },
        remove() {
            this.clear()
            if (this.$route.params.id === 'create' ) {
                this.goToBack()
            } else {
                this.deleteInfo()
            }
        },
        save() {
            console.log('save')
            this.$route.params.id === 'create' ?  this.createNewInfo(this.info) : this.putInfo()
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
        changeConditions(value) {
            let isNewPromo = this.$route.params.id === 'create'
                if (value === 'date') {
                    this.$store.commit('promocodes/addDateParams', isNewPromo)
                } else {
                    this.$store.commit('promocodes/deleteDateParams', isNewPromo)
                }
        }
    },
}