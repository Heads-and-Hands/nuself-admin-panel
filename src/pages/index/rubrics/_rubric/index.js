import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    data() {
        return {
            rubricData: {
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
            navList: [
                {
                    title: 'Основное',
                    id: 'common'
                },
                {
                    title: 'Материалы',
                    id: 'products'
                },
            ],
            isSaveChange: true,
            dialogStatusVisible: false,
        }
    },
    created() {
        this.data = JSON.parse(JSON.stringify(this.rubricData))
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.rubricData)
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
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.rubricData))
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