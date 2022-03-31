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
        if (this.$route.params.id !== 'create') {
            this.getCompilationsProducts()
        }
    },
    computed: {
        products() {
            if (this.$route.params.id !== 'create') {
                return this.$store.state.compilations.products
            } else {
                return this.$store.state.compilations.newProducts
            }
        }
    },
    components: {
        rightSideBar,
        saveNotification,
        toggleStatus,
        tableProducts,
    },
    methods: {
        deleteCompilation() {
            this.$confirm('Вы уверены, что хотите удалить выбранную подборку?', 'Удалить подборку?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(() => {
                this.deleteInfo()
                this.$message({
                    type: 'success',
                    message: 'Подборка успешно удалена'
                });
            })
        },
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
        save() {
            console.log('save')
            if (this.$route.params.id === 'create') {
                let listId = this.products.list.map((elem) => elem.id)
                let value = {...this.info, ...listId} //доделать создание когда можно будет добавить продукты
                this.createNewInfo(value)
            } else {
                this.putInfo()
            }
        },
        changeStatus(status) {
            if (status) {
                this.info.status = status
            }
            this.dialogStatusVisible = false
        },
    }
}