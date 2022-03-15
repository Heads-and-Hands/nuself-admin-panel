import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            tableBanners: [
                {
                    id: '163',
                    image: 'https://anews.com/upload/post/2020/11/01/121377232/gallery/tn/286964460.jpg',
                    title: 'Длинный заголовок баннера',
                    type: 'С товарами',
                    transition: 'Подборка',
                    status: 'Показывать',
                    description: '',
                },
                {
                    id: '163',
                    image: 'https://anews.com/upload/post/2020/11/01/121377232/gallery/tn/286964460.jpg',
                    title: 'Длинный заголовок баннера',
                    type: 'С товарами',
                    transition: 'Подборка',
                    status: 'Показывать',
                    description: '',
                },
            ],
            dialogTablesVisible: false,
            listRemoveBanner: []
        }
    },
    components: {
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveBanner.length === 1? 'Выбран' : 'Выбрано'
            text = text + ` ${this.listRemoveBanner.length} ${this.ending(this.listRemoveBanner.length, 'баннер')}`
            return text
        }
    },
    methods: {
        deleteBanner() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранный баннер?', 'Удалить баннер?',  {
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
        openBannerPage(id) {
            this.$router.push({ path: `banners/banner/${id}`});
        },
        handleSelectionChange(val) {
            this.listRemoveBanner = val;
        },
        ending(value, str){
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "ов";
                    break;
                case value === 1:
                    ending += "";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "а";
                    break;
                default:
                    ending += "ов";
                    break;
            }
            return ending;
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        clear() {
            this.$refs.listRemoveTable.clearSelection();
        },
        change() {
            console.log('change status')
            this.clear()
        }
    }
}