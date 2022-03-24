import saveNotification from "@/components/save-notification/save-notification.vue"
import selectBlockModal from "@/components/modals/select-block-modal/select-block-modal.vue"

export default {
    data() {
        return {
            tableContent: {
            },
            data: {},
            articleList: [
                {
                    title: 'Подборка',
                    type: 'text',
                },
                {
                    title: 'Баннер',
                    type: 'carousel',
                },
                {
                    title: 'Блок «Сообщество»',
                    type: 'tile'
                },
                {
                    title: 'Материал',
                    type: 'material'
                },
                {
                    title: 'Баннер с товарами',
                    type: 'products'
                },
            ],
            dialogArticleVisible: false,
            isSaveChange: false,
            newBlockCount: 0,
            newBlockImageCount: 0,
        }
    },
    created() {
        this.data = JSON.parse(JSON.stringify(this.tableContent))
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.tableContent)
        },
    },
    components: {
        saveNotification,
        selectBlockModal,
    },
    methods: {
        openSelectBlockModal(id) {
            this.dialogArticleVisible = true
            this.newBlockCount = id + 1
        },
        createNewBlock(block) {
            let newBlock = {
                type: block,
            }
            if (block === 'carousel' || block === 'tile') {
                newBlock.value = []
            } else {
                newBlock.value = ''
            }
            this.data.article.splice(this.newBlockCount, 0, newBlock);
            this.dialogArticleVisible = false
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.tableContent))
        },
        save() {
            console.log('save')
            this.clear()
        },
    }
}