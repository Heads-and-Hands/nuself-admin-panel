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
            selectType: [
                {
                    value: 'Карусель'
                },
                {
                    value: 'Плитка'
                }
            ],
            navList: [
                {
                    title: 'Основное',
                    id: 'common'
                },
                {
                    title: 'Товары',
                    id: 'products'
                },
            ],
            isSaveChange: false,
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
            this.$router.push({ path: `/compilations` });
        },
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        }
    }
}