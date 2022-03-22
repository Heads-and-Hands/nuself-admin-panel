import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
            ordersTable: []
        }
    },
    methods: {
        openOrderPage(id) {
            this.$router.push({ path: `orders/order/${id}`});
        },
        handleSelectionChange(val) {
            this.ordersTable = val;
        },
    }
}