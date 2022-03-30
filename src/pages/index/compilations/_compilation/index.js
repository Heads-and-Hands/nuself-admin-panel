import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import tableProducts from "@/components/table-products/table-products.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            selectType: [
                {
                    title: 'Карусель',
                    value: 'carousel'
                },
                {
                    title: 'Плитка',
                    value: 'tile'
                }
            ],
            navList: [],
            dialogStatusVisible: false,
            productMeta: {
                offset: 0,
                limit: 30,
            }
        }
    },
    mounted() {
        this.navList = [
            {
                title: 'Основное',
                id: 'common',
                template: this.$refs.common
            },
            {
                title: 'Товары',
                id: 'products',
                template: this.$refs.products
            }
        ]
    },
    created() {
        this.getCompilationsProducts()
    },
    computed: {
        products() {
            return this.$store.state.compilations.products
        }
    },
    components: {
        rightSideBar,
        saveNotification,
        toggleStatus,
        tableProducts,
    },
    methods: {
        async getCompilationsProducts() {
            this.loading = true
            const action = `compilations/getProducts`;
            let params = {id: this.$route.params.id, ...this.productMeta }
            try { await this.$store.dispatch(action, params)}
            finally { this.loading = false }
        },
        goToBack() {
            this.$router.push({ path: `/compilations` });
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.list))
        },
        changeStatus(status) {
            if (status) {
                this.data.common.status = status
            }
            this.dialogStatusVisible = false
        }
    }
}