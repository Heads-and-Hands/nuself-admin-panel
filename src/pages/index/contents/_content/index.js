import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import selectBlockModal from "@/components/modals/select-block-modal/select-block-modal.vue"
import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import tableProducts from "@/components/table-products/table-products.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            data: {
                id: '1R1469',
                title: 'Название',
                status: 'active',
                type: 'Статья',
                rubric: 'Люди',
                album: [
                    {
                        id: '1234',
                        imagePath: 'https://static.ngs.ru/news/99/preview/b62c41190a514b3428cb96498d0c3acc0b2ef73e_599_399_c.jpg',
                        order: 1
                    },
                    {
                        id: '1234',
                        imagePath: 'https://4tololo.ru/sites/default/files/field/image/catman-1_0.jpg',
                        order: 2
                    },
                ],
                article: [
                    {
                       type: 'annotation',
                       value: 'Контур четче, кожа более упругая, отеков след простыл — так выглядит стандартный' +
                           'набор восторженных отзывов о микротоковой терапии. Рассказываем, что из этого правда и' +
                           ' почему ближайшее время микротоки точно будут одной из самых популярных домашних процедур.'
                    },
                    {
                        type: 'text',
                        value: 'Контур четче, кожа более упругая, отеков след простыл — так выглядит стандартный ' +
                            'набор восторженных отзывов о микротоковой терапии. Рассказываем, что из этого правда и ' +
                            'почему ближайшее время микротоки точно будут одной из самых популярных домашних' +
                            ' бьюти-процедур. \n' +
                            'Начнем с того, что сама технология изобретена давно — к этой физиотерапевтической' +
                            ' процедуре прибегали еще советские специалисты. А современные косметологи нередко ' +
                            'используют микротоковую терапию в комплексе с другими процедурами вроде чистки или ' +
                            'массажа. Но стать частью домашней бьюти-рутины микротокам было суждено только сейчас.'
                    },
                    {
                        type: 'image',
                        value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66aqFR110FWudIMHfZR2PTPj-hmMPlSDcDg&usqp=CAU'
                    },
                    {
                        type: 'carousel',
                        value: ''
                    },
                    {
                        type: 'video',
                        value: 'https://youtu.be/xA-ayM5I4Jw'
                    },
                    {
                        type: 'tile',
                        value: ''
                    },
                    {
                        type: 'text',
                        value: 'Контур четче, кожа более упругая, отеков след простыл — так выглядит стандартный ' +
                            'набор восторженных отзывов о микротоковой терапии. Рассказываем, что из этого правда и ' +
                            'почему ближайшее время микротоки точно будут одной из самых популярных домашних' +
                            ' бьюти-процедур. \n' +
                            'Начнем с того, что сама технология изобретена давно — к этой физиотерапевтической' +
                            ' процедуре прибегали еще советские специалисты. А современные косметологи нередко ' +
                            'используют микротоковую терапию в комплексе с другими процедурами вроде чистки или ' +
                            'массажа. Но стать частью домашней бьюти-рутины микротокам было суждено только сейчас.'
                    },
                ],
                goods: [],
                similary: [],
                forVideo: 'https://youtu.be/JqN5hM_iRo4?t=144',
                forEvent: {
                    date: 'Tue Mar 29 2022 00:03:00 GMT+0300',
                    place: 'г. Москва, ул. Ленина, 16',
                    link: 'https://youtu.be/aZeh6idYc1Y'
                },
                products: {
                    list: [
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            article: '1RJ431',
                            status: 'Не показывать',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurenser...',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                        },
                    ],
                },
            },
            selectType: [
                {
                    value: 'Статья'
                },
                {
                    value: 'Видео'
                },
                {
                    value: 'Событие'
                }
            ],
            selectRubric: [
                {
                    value: 'Люди'
                },
                {
                    value: 'Нелюди'
                },
            ],
            articleList: [
                {
                    title: 'Текстовый блок',
                    type: 'text',
                },
                {
                    title: 'Карусель товаров',
                    type: 'carousel',
                },
                {
                    title: 'Плитка товаров',
                    type: 'tile'
                },
                {
                    title: 'Фото',
                    type: 'image'
                },
                {
                    title: 'Видео',
                    type: 'video'
                },
            ],
            dialogStatusVisible: false,
            dialogArticleVisible: false,
            isSaveChange: false,
            imageUrl: '',
            imageUrl2: '',
            newBlockCount: 0,
            newBlockImageCount: 0,
            navList: [],
        }
    },
    mounted() {
        if (this.data.type === "Статья") {
            this.navList = [
                {
                    title: 'Основное',
                    id: 'common',
                    template: this.$refs.common
                },
                {
                    title: 'Статья',
                    id: 'article',
                    template: this.$refs.article
                },
                {
                    title: 'Товары из статьи',
                    id: 'products',
                    template: this.$refs.products
                },
                {
                    title: 'Похожие из статьи',
                    id: 'similar',
                    template: this.$refs.similar
                },
            ]
        }
        else if (this.data.type === "Событие") {
            this.navList = [
                {
                    title: 'Основное',
                    id: 'common',
                    template: this.$refs.common
                },
                {
                    title: 'Описание',
                    id: 'article',
                    template: this.$refs.article
                },
            ]
        } else { this.navList = [] }
    },
    created() {
        this.imageUrl = this.data.album[0].imagePath
        this.imageUrl2 = this.data.album[1].imagePath
    },
    components: {
        rightSideBar,
        saveNotification,
        selectBlockModal,
        toggleStatus,
        tableProducts
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
        },
        isType() {
            return this.data.type
        }
    },
    watch: {
        isType(newValue) {
            if (newValue === "Статья") {
                this.navList = [
                    {
                        title: 'Основное',
                        id: 'common',
                        template: this.$refs.common
                    },
                    {
                        title: 'Статья',
                        id: 'article',
                        template: this.$refs.article
                    },
                    {
                        title: 'Товары из статьи',
                        id: 'products',
                        template: this.$refs.products
                    },
                    {
                        title: 'Похожие из статьи',
                        id: 'similar',
                        template: this.$refs.similar
                    },
                ]
            }
            else if (newValue === "Событие") {
                this.navList = [
                    {
                        title: 'Основное',
                        id: 'common',
                        template: this.$refs.common
                    },
                    {
                        title: 'Описание',
                        id: 'article',
                        template: this.$refs.article
                    },
                ]
            } else { this.navList = [] }
        }
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/contents` });
        },
        beforeImageUpload(file, str) {
            this.imageUrl = URL.createObjectURL(file);
            return true;
        },
        beforeImageUploadTwo(file) {
            this.imageUrl2 = URL.createObjectURL(file);
            return true;
        },
        addPhoto(index) {
            this.newBlockImageCount = index
        },
        addImageBlock(file) {
            let id = this.newBlockImageCount
            this.data.article[this.newBlockImageCount].value = URL.createObjectURL(file);
            return true;
        },
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        },
        openSelectBlockModal(id) {
            this.dialogArticleVisible = true
            this.newBlockCount = id + 1
        },
        createNewBlock(block) {
            let newBlock = {
                type: block,
            }
            if (block === 'carousel' || block === 'tile') {
                newBlock.value = []
            } else {
                newBlock.value = ''
            }
            this.data.article.splice(this.newBlockCount, 0, newBlock);
            this.dialogArticleVisible = false
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
    }
}