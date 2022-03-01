import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"

export default {
    data() {
        return {
            categoryData: {
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
                    column: [
                        {
                            title: 'ID',
                            reference: 'id'
                        },
                        {
                            title: 'Фото',
                            reference: 'image'
                        },
                        {
                            title: 'Артикул',
                            reference: 'article'
                        },
                        {
                            title: 'Бренд',
                            reference: 'brand'
                        },
                        {
                            title: 'Цвет',
                            reference: 'color'
                        },
                        {
                            title: 'Статус',
                            reference: 'status'
                        },
                    ],
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
                            status: 'Показывать',
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
            dialogImageUrl: '',
            dialogStatusVisible: false,
            tableSize: [{
                id: 1,
                image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                name: 'Таблица размеров'
            }],
            disabled: false,
            imageUrl: '',
            isCustom: true,
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
            changeStatus: ''
        }
    },
    components: {
        rightSideBar
    },
    methods: {
        deleteCategory() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранные категории?', 'Удалить категорию?',  {
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
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        },
    }

}