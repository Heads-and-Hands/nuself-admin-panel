import MixinList from '@/mixins/tableList'

export default {
    mixins: [
        MixinList
    ],
    data() {
        return {
        }
    },
    methods: {
        openPage(id) {
            this.$router.push({path: `promocodes/promocode/${id}`});
        },
        deletePromo(id) {
            this.$confirm('Вы уверены, что хотите удалить выбранный промокод?', 'Удалить промокод?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(() => {
                this.deleteItem(id)
                this.$message({
                    type: 'success',
                    message: 'Промокод успешно удален'
                });
            })
        },
    }
}