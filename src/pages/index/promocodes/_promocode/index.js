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
        async putInfo() {
            this.loading = true;
            const action = `${this.$route.name}s/putInfo`;
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
            if (value === 'date') {
              this.$store.commit('promocodes/addDateParams')
            } else {
               console.log('delete')
            }
        }
    },
}