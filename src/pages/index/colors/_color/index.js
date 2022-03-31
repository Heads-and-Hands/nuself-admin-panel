import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            info: {
                id: '123',
                title: 'orange',
                color: '#F47500',
                image: '#'
            },
            showPicker: false,
            isSaveChange: false,
            selectProducColor: [],
            productColors: [
                {
                    id: 1,
                    title: 'какойто цвет'
                },
                {
                    id: 2,
                    title: 'какойто цвет'
                },
                {
                    id: 3,
                    title: 'какойто цвет'
                },
                {
                    id: 4,
                    title: 'какойто цвет'
                },

            ]
        }
    },
    components: {
        saveNotification
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.info.color = document.querySelector(".color-picker .el-input__inner").value
            this.info.color !== this.info.color? this.isSaveChange = true : this.isSaveChange = false
        },
        save() {
            console.log('save')
            this.$route.params.id === 'create' ?  this.createNewInfo(this.info) : this.putInfo()
            this.isSaveChange = false

        },
    },
}