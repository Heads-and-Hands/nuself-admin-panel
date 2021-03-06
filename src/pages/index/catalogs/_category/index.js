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
            categoryDataApi: {
                common: {
                    id: '1R1469',
                    name: 'Категория мемных котов',
                    status: 'Показывать',
                    image: 'https://mr-mem.ru/images/memes/mem-s-kotom-za-stolom.jpg',
                    sizeTableType: 'wear'
                },
                products: {
                    meta: {
                        offset: 0,
                        limit: 50,
                        total: 10050
                    },
                    list: [
                        {
                            id: '161',
                            image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurensers Definitive',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Не показывать',
                            order: 1
                        },
                        {
                            id: '162',
                            image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurense',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 2
                        },
                        {
                            id: '163',
                            image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurense',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 3
                        },
                        {
                            id: '164',
                            image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurense',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 4
                        },
                        {
                            id: '165',
                            image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                            article: '1RJ431',
                            name: 'Футболка с красным принтом...',
                            brand: 'Lauren Ralpher Laurense',
                            color: {
                                id: 1,
                                title: 'синий',
                                color: '#0000ff',
                                image: ''
                            },
                            status: 'Показывать',
                            order: 5
                        },
                    ]
                }
            },
            sizeSelectList: [
                {
                    title: 'Одежда',
                    value: 'wear'
                },
                {
                    title: 'Обувь',
                    value: 'shoes'
                },
                {
                    title: 'Джинсы',
                    value: 'jeans'
                },
            ],
            navList: [],
            dialogStatusVisible: false,
            categoryData: {},
        }
    },
    mounted() {
        this.navList = [
            {
                title: 'Основное',
                id: 'main',
                template: this.$refs.main
            },
            {
                title: 'Товары',
                id: 'goods',
                template: this.$refs.goods
            }
        ]
    },
    components: {
        rightSideBar,
        toggleStatus,
        tableProducts,
        saveNotification
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
        },
    },
    methods: {
        deleteCategory() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранный товар?', 'Удалить товар?',  {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your delete' + value
                });
            })
        },
        goToBack() {
            this.$router.push({ path: `/catalog` });
        },
        beforeImageUpload(file) {
            this.addImage(file)
            return true;
        },
        addImage(file) {
            this.data.common.image = URL.createObjectURL(file);
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.info))
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