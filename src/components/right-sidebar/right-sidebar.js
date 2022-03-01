export default {
    data() {
        return {
            listexample: [
                {
                    title: 'Основное',
                    id: 'main'
                },
                {
                    title: 'Товары',
                    id: 'goods'
                }
            ]
        }
    },
    props: {
        list: [],
    },
}