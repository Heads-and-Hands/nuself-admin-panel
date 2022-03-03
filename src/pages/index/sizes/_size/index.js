import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            size: {
                id: '1R1469',
                name: 'Название',
                image: 'https://lutchsport.ru/images/tab/table-size-women.jpg'
            },
            newName: '',
            imageUrl: '',
        }
    },
    computed: {
        isSaveChange() {
            if (this.size.name === this.newName && this.imageUrl === this.size.image) {
                return false
            } else return true
        }
    },
    components: {
        saveNotification
    },
    mounted() {
        this.clearAll()
    },
    methods: {
       goToBack() {
           this.$router.push({ path: `/sizes` });
       },
       beforeImageUpload(file) {
           this.addImage(file)
           return true;
       },
       addImage(file) {
           this.imageUrl = URL.createObjectURL(file);
       },
        clearAll() {
            this.imageUrl = this.size.image
            this.newName = this.size.name
        }
   }
}