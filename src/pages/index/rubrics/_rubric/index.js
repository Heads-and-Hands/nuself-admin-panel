import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            info: {
                common: {
                    id: '1R1469',
                    name: 'Название подборки',
                    status: 'Показывать',
                    description: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке. ' +
                        'Капюшон дополнен шнуром для дополнительной утяжки и защиты от ветра. Воротник-стойка. ' +
                        'Вместительные боковые карманы. Манжеты на рукавах и штанинах. Двойной бегунок для' +
                        ' удобства туалета',
                    compilations: [
                        {
                            id: '123',
                            name: 'Длинное название подборки',
                            previewType: 'Карусель',
                            status: 'Показывать',
                            description: 'description'
                        },
                        {
                            id: '124',
                            name: 'Длинное название подборки',
                            previewType: 'Плитка',
                            status: 'Показывать',
                            description: 'description'
                        },
                        {
                            id: '125',
                            name: 'Длинное название подборки',
                            previewType: 'Плитка',
                            status: 'Показывать',
                            description: 'description'
                        }
                    ]
                },
                content: 43
            },
            data: {},
            navList: [],
            isSaveChange: true,
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
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
        }
    },
    components: {
        rightSideBar,
        toggleStatus,
        saveNotification
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/rubrics` });
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.info))
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
            this.clear()
        },
        changeStatus(status) {
            if (status) {
                this.data.common.status = status
            }
            this.dialogStatusVisible = false
        }
    }
}