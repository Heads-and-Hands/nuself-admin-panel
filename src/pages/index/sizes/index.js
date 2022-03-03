import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            tableSize: [
                {
                    id: 1,
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Название размерной таблицы'
                },
                {
                    id: 2,
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Название размерной таблицы'
                },
                {
                    id: 3,
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Название размерной таблицы'
                },
                {
                    id: 4,
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Название размерной таблицы'
                },
                {
                    id: 5,
                    image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
                    name: 'Название размерной таблицы'
                },
            ],
            listRemoveTable: [],
            isSaveChange: false
        }
    },
    components: {
        saveNotification
    },
    methods: {
        deleteTable() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранную таблицу?', 'Удалить таблицу?',  {
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
        handleSelectionChange(val) {
            this.listRemoveTable = val;
        },
        toggleSelection() {
                this.$refs.listRemoveTable.clearSelection();
        },
        openSizePage(id) {
            this.$router.push({ path: `sizes/size/${id}`});
        },
    }
}