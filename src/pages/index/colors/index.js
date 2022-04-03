import MixinList from '@/mixins/tableList'

export default {
    data() {
        return {
        }
    },
    mixins: [
        MixinList
    ],
    methods: {
        deleteColor(id) {
            this.$confirm('Вы уверены, что хотите удалить выбранный фильтр цвета?', 'Удалить фильтр?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(() => {
                this.deleteItem(id)
                this.$message({
                    type: 'success',
                    message: 'Фильтр успешно удален'
                });
            })
        },
    }
}