import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            saleData: {
                id: '1R1469',
                name: 'Название скидки',
                status: 'Показывать',
                sale: '15%',
                validity: [ "2010-11-18", "2010-11-18" ],
                subjectType: 'Дизайнер',
                relation: [
                    {
                        id: '123',
                        name: 'Длинное название подборки',
                        previewType: 'Карусель',
                        status: 'Показывать',
                        description: 'description'
                    },
                ]
            },
            selectType: [
                {
                    value: 'Дизайнер'
                },
                {
                    value: 'Подборка'
                },
                {
                    value: 'Категория'
                },
                {
                    value: 'Группа товаров'
                }
            ],
            dialogStatusVisible: false,
        }
    },
    computed: {
        isSaveChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.saleData)
        },
    },
    components: {
        saveNotification,
        toggleStatus
    },
    watch: {
        data(val) {
            console.log(val)
        }
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/compilations` });
        },
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.saleData))
        },
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        },
    }
}