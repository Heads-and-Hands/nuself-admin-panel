export default {
    data() {
        return {
            data: {
                id: '1R1469',
                title: 'Заголовок баннера',
                status: 'Показывать',
                type: 'Обычный',
                transition: 'Подборка',
                gallery: [
                    {
                        id: '1234',
                        imagePath: 'https://anews.com/upload/post/2020/11/01/121377232/gallery/tn/286964460.jpg',
                        order: 1
                    },
                    {
                        id: '1234',
                        imagePath: 'https://anews.com/upload/post/2020/11/01/121377232/gallery/tn/286964460.jpg',
                        order: 2
                    },
                ],
                compilation: {
                    id: '163',
                    name: 'Длинное название подборки',
                    previewType: 'Карусель',
                    status: 'Показывать',
                    description: '',
                }
            },
            selectType: [
                {
                    value: 'C товарами'
                },
                {
                    value: 'Обычный'
                }
            ],
            selectTransition: [
                {
                    value: 'Подборка'
                },
                {
                    value: 'Категория'
                },
                {
                    value: 'Дизайнер'
                }
            ],
            dialogStatusVisible: false,
            imageUrl: [],
        }
    },
    computed: {
        changeStatus() {
            return this.data.status
        }
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/banners` });
        },
    }
}