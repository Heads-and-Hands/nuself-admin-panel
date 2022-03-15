import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            orderData: {
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
            changeStatus: ''
        }
    },
    created() {
        this.changeStatus = this.orderData.common.status
    },
    components: {
        rightSideBar,
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
        }
    }
}