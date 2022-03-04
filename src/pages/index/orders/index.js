export default {
    data() {
        return {
            ordersData: [
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
                {
                    id: '163905',
                    date: '21.08.2021, 16:58',
                    customer: 'Крестьянникова Мария',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    paymentType: 'MasterCard',
                    price: '12 214 ₽'
                },
            ],
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