import MixinList from '@/mixins/tableList'

export default {
    data() {
        return {
            // list: [
            //     {
            //         id: '1',
            //         color: {
            //             id: '123',
            //             title: 'orange',
            //             color: '#F47500',
            //             image: '#'
            //         }
            //     },
            //     {
            //         id: '2',
            //         color: {
            //             id: '123',
            //             title: 'orange',
            //             color: '#F47500',
            //             image: '#'
            //         }
            //     },
            //     {
            //         id: '3',
            //         color: {
            //             id: '123',
            //             title: 'orange',
            //             color: '#F47500',
            //             image: '#'
            //         }
            //     },
            //     {
            //         id: '4',
            //         color: {
            //             id: '123',
            //             title: 'orange',
            //             color: '#F47500',
            //             image: '#'
            //         }
            //     },
            // ],
            data: {}
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