import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
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
        this.imageUrl = this.data.gallery[0].imagePath
        this.imageUrl2 = this.data.gallery[1].imagePath
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
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