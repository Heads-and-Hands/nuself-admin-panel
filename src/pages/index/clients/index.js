export default ({
    data() {
        return {
            clientsData: [
                {
                    id: '1639',
                    name: 'Константин Константинов',
                    status: 'Активен',
                    phone: '+7 982 974 21 68',
                    email: 'S.vasiliev@yandex.ru',
                    city: '21.08.2021, 16:58'
                },
                {
                    id: '1640',
                    name: 'Константин Константинов',
                    status: 'Активен',
                    phone: '+7 982 974 21 68',
                    email: 'S.vasiliev@yandex.ru',
                    city: '21.08.2021, 16:58'
                },
                {
                    id: '1641',
                    name: 'Константин Константинов',
                    status: 'Активен',
                    phone: '+7 982 974 21 68',
                    email: 'S.vasiliev@yandex.ru',
                    city: '21.08.2021, 16:58'
                },
            ],
            searchValue: ''
        }
    },
    methods: {
        openClientPage(id) {
            this.$router.push({ path: `clients/client/${id}`});
        },
    }
})