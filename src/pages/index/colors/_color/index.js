import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
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
            this.customImage !== this.color.color? this.isSaveChange = true : this.isSaveChange = false
        },
        clearAll() {
            this.customImage = this.color.color
        }
    },
}