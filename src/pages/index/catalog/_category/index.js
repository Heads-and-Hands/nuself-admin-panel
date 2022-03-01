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
                            brand: 'Lauren Ralpher Laurensellllllllljdbjhsdbvc dh',
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
            dialogVisible: false,
            tableSize: [{
                id: 1,
                image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                name: 'Таблица размеров'
            }],
            disabled: false,
            imageUrl: '',
            isCustom: false,
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
        }
    },
    components: {
        rightSideBar
    },
    methods: {
        movePosition() {
            this.$prompt('Переместить на позицию',  {
                confirmButtonText: 'Переместить',
                inputPattern: /^[0-9]+$/,
                customClass: 'position-modal',
                cancelButtonClass: 'cancel',
                confirmButtonClass: 'confirm',
                center: true
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your position is:' + value
                });
            })
        },
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
        returnStyle(elem) {
            if (elem.reference === 'id') return 41
            if (elem.reference === 'image') return 76
            if (elem.reference === 'article') return 80
            if (elem.reference === 'brand') return 106
            if (elem.reference === 'color') return 104
            if (elem.reference === 'status') return 126
        },
        tableRowClassName({row}) {
            if (!row.image) {
                return 'warning-row'
            }
        },
        goToBack() {
            this.$router.push({ path: `/catalog` });
        },
        beforeAvatarUpload(file) {
          console.log('file',file)
            this.handleAvatarSuccess(file)
            return true;
        },
        handleAvatarSuccess(file) {
            console.log('file', file)
            this.imageUrl = URL.createObjectURL(file);
        },
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        }
    }

}