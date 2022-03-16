import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    data() {
        return {
            tableBanner: {
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
            data: {},
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
        this.data = JSON.parse(JSON.stringify(this.tableBanner))
        this.imageUrl = this.data.gallery[0].imagePath
        this.imageUrl2 = this.data.gallery[1].imagePath
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.tableBanner)
        }
    },
    components: {
        saveNotification,
        toggleStatus
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
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.tableBanner))
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