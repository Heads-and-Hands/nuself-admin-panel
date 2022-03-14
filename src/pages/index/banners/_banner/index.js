import saveNotification from "@/components/save-notification/save-notification.vue"

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
                        imagePath: 'https://static.ngs.ru/news/99/preview/b62c41190a514b3428cb96498d0c3acc0b2ef73e_599_399_c.jpg',
                        order: 1
                    },
                    {
                        id: '1234',
                        imagePath: 'https://4tololo.ru/sites/default/files/field/image/catman-1_0.jpg',
                        order: 2
                    },
                ],
                compilation: [
                    {
                        id: '163',
                        name: 'Длинное название подборки',
                        previewType: 'Карусель',
                        status: 'Показывать',
                        description: '',
                    },
                ]
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
            isSaveChange: false,
            imageUrl: '',
            imageUrl2: ''
        }
    },
    created() {
        this.imageUrl = this.data.gallery[0].imagePath
        this.imageUrl2 = this.data.gallery[1].imagePath
    },
    computed: {
        changeStatus() {
            return this.data.status
        },
    },
    components: {
        saveNotification
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/banners` });
        },
        beforeImageUpload(file) {
            this.addImage(file)
            return true;
        },
        beforeImageUploadTwo(file) {
            this.addImageTwo(file)
            return true;
        },
        addImage(file) {
            this.imageUrl = URL.createObjectURL(file);
        },
        addImageTwo(file) {
            this.imageUrl2 = URL.createObjectURL(file);
        },
    }
}