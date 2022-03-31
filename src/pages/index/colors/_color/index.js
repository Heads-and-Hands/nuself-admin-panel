import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            data: {
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
    // mounted() {
    //     this.clearAll()
    // },
    components: {
        saveNotification
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.data.color = document.querySelector(".color-picker .el-input__inner").value
            this.data.color !== this.info.color? this.isSaveChange = true : this.isSaveChange = false
        },
        clearAll() {
            this.data.color = this.info.color
            this.isSaveChange = false
        },
        save() {
            console.log('save')
            this.isSaveChange = false
        }
    },
}