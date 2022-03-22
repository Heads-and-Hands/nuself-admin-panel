import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    components: {
        rightSideBar,
        saveNotification,
        toggleStatus
    },
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            data: {},
            newCategoryData: {
                common: {
                    id: '',
                    name: 'Новая категория',
                    status: 'Показывать',
                    image: '',
                },
                products: {
                    meta: {
                        offset: 0,
                        limit: 50,
                        total: 10050
                    },
                    list: []
                }
            },
            tableSize: [{
                id: 1,
                image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                name: 'Таблица размеров'
            }],
            navList: [],
            dialogStatusVisible: false,
            categoryData: {},
        }
    },
    mounted() {
        this.navList = [
            {
                title: 'Основное',
                id: 'main',
                template: this.$refs.main
            },
            {
                title: 'Товары',
                id: 'goods',
                template: this.$refs.goods
            }
        ]
    },
    computed: {
        category() {
            if (this.$route.params.id === 'new-category') {
                return this.newCategoryData
            } else return this.data
        },
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.info)
        },
    },
    methods: {
        deleteCategory() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранный товар?', 'Удалить товар?',  {
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
        goToBack() {
            this.$router.push({ path: `/catalog` });
        },
        beforeImageUpload(file) {
            this.addImage(file)
            return true;
        },
        addImage(file) {
            this.data.common.image = URL.createObjectURL(file);
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.info))
        },
        save() {
            console.log('save')
            this.clear()
        },
        changeStatus(status) {
            if (status) {
                this.data.common.status = status
            }
            this.dialogStatusVisible = false
        }
    }

}