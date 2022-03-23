import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import tableProducts from "@/components/table-products/table-products.vue"

export default {
    data() {
        return {
            complData: {
                common: {
                    id: '1R1469',
                    name: 'Название подборки',
                    status: 'Показывать',
                    preview: 'Карусель',
                    descriptions: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке. ' +
                        'Капюшон дополнен шнуром для дополнительной утяжки и защиты от ветра. Воротник-стойка. ' +
                        'Вместительные боковые карманы. Манжеты на рукавах и штанинах. Двойной бегунок для' +
                        ' удобства туалета',
                },
                products: {
                    list: [
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurenser...',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 1
                        },
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurenser...',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 1
                        },
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurenser...',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 1
                        },
                    ]
                }
            },
            data: {},
            selectType: [
                {
                    value: 'Карусель'
                },
                {
                    value: 'Плитка'
                }
            ],
            navList: [],
            dialogStatusVisible: false,
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
        this.data = JSON.parse(JSON.stringify(this.complData))
    },
    computed: {
        isSaveChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.complData)
        }
    },
    components: {
        rightSideBar,
        saveNotification,
        toggleStatus
        tableProducts,
        saveNotification
    },
    methods: {
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
            this.data = JSON.parse(JSON.stringify(this.complData))
        },
        changeStatus(status) {
            if (status) {
                this.data.common.status = status
            }
            this.dialogStatusVisible = false
        }
    }
}