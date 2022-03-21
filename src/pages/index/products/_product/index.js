import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            categoryDataApi: {
                common: {
                    id: '1R1469',
                    name: 'Категория мемных котов',
                    status: 'Показывать',
                    image: 'https://mr-mem.ru/images/memes/mem-s-kotom-za-stolom.jpg',
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
            newCategoryData: {
                common: {
                    id: '',
                    name: 'Новая категория',
                    status: 'Показывать',
                    image: '',
                },
                products: {
                    meta: {
                        offset: 0,
                        limit: 50,
                        total: 10050
                    },
                    list: []
                }
            },
            tableSize: [{
                id: 1,
                image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                name: 'Таблица размеров'
            }],
            navList: [
                {
                    title: 'Основное',
                    id: 'main'
                },
                {
                    title: 'Товары',
                    id: 'goods'
                }
            ],
            imageUrl: '',
            changeStatus: '',
            dialogStatusVisible: false,
            isCustom: true,
            isSaveChange: false,
            categoryData: {}
        }
    },
    created() {
        this.getCategoriesData()
    },
    components: {
        rightSideBar,
        saveNotification
    },
    computed: {
        category() {
            if (this.$route.params.id === 'new-category') {
                return this.newCategoryData
            } else return this.categoryDataApi
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
            this.imageUrl = URL.createObjectURL(file);
        },
        async getCategoriesData() {
            this.categoryData = await this.$store.dispatch('catalog/getCategoriesData', Number(this.$route.params.id))
                .then((data) => data.list)
        }
    }

}