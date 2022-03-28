import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            navList: [
                {
                    title: 'Основное',
                    id: 'common'
                },
                {
                    title: 'Доставка',
                    id: 'delivery'
                },
                {
                    title: 'Клиент',
                    id: 'customer'
                },
                {
                    title: 'Промокод',
                    id: 'promocodes'
                },
                {
                    title: 'Товары и сумма',
                    id: 'products'
                },
            ],
            isSaveChange: false
        }
    },
    mounted() {
        this.navList = [
            {
                title: 'Основное',
                id: 'common',
                template: this.$refs.common,
            },
            {
                title: 'Доставка',
                id: 'delivery',
                template: this.$refs.delivery,
            },
            {
                title: 'Клиент',
                id: 'customer',
                template: this.$refs.customer,
            },
            {
                title: 'Промокод',
                id: 'promocodes',
                template: this.$refs.promocodes,
            },
            {
                title: 'Товары и сумма',
                id: 'products',
                template: this.$refs.products,
            },
        ]
    },
    computed: {
        customerTable() {
            return [JSON.parse(JSON.stringify(this.info.customer))]
        },
        promoTable() {
            return [JSON.parse(JSON.stringify(this.info.promocodes))]
        },
        sumOrder() {
            let result = this.info.products.list.reduce(function(sum, elem) {
                return Number(sum) + Number(elem.price)
            }, 0)
            console.log(result)
            return result
        }
    },
    components: {
        rightSideBar,
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/orders` });
        },
    }
}