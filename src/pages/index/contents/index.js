import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"
import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
            list: [
                {
                    id: '163',
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Длинное название материала в две строки',
                    type: 'Статья',
                    rubric: 'Люди',
                    status: 'Показывать',
                    date: '21.08.2021, 16:58',
                },
                {
                    id: '164',
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Длинное название материала в две строки',
                    type: 'Статья',
                    rubric: 'Люди',
                    status: 'Показывать',
                    date: '21.08.2021, 16:58',
                },
                {
                    id: '165',
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Длинное название материала в две строки',
                    type: 'Статья',
                    rubric: 'Люди',
                    status: 'Показывать',
                    date: '21.08.2021, 16:58',
                },
            ],
            dialogTablesVisible: false,
            listRemoveContent: [],
            dialogStatusVisible: false,
            typeContent: 'rubric',
            selectTypeContent: [
                {
                    value: 'rubric',
                    title: 'Рубрика'
                }
            ]
        }
    },
    components: {
        toggleStatus,
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveContent.length === 1? 'Выбран' : 'Выбрано'
            text = text + ` ${this.listRemoveContent.length} ${this.ending(this.listRemoveContent.length, 'материал')}`
            return text
        }
    },
    methods: {
        deleteContent() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранный материал?', 'Удалить материал?',  {
                confirmButtonText: 'Удалить',
                customClass: 'delete-modal',
                confirmButtonClass: 'button',
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Успешно'
                });
            })
        },
        openContentPage(id) {
            this.$router.push({ path: `contents/content/${id}`});
        },
        toggleSelection() {
            this.$refs.listRemoveContent.clearSelection();
        },
        handleSelectionChange(val) {
            this.listRemoveContent = val;
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
            this.dialogStatusVisible = true
        },
        changeStatus() {
            console.log('change status method')
            this.clear()
            this.dialogStatusVisible = false
        },
        closeToggleStatus() {
            this.clear()
            this.dialogStatusVisible = false
        }
    }
}