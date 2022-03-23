import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            color: {
                id: '123',
                title: 'orange',
                color: '#F47500',
                image: '#'
            },
            customImage: '',
            showPicker: false,
            isSaveChange: false
        }
    },
    mounted() {
        this.clearAll()
    },
    components: {
        saveNotification
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.customImage = document.querySelector(".color-picker .el-input__inner").value
            this.customImage !== this.info.color? this.isSaveChange = true : this.isSaveChange = false
        },
        clearAll() {
            this.customImage = this.info.color
            this.isSaveChange = false
        },
        save() {
            console.log('save')
            this.isSaveChange = false
        }
    },
}