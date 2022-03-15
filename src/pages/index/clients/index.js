import saveNotification from "@/components/save-notification/save-notification.vue"

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
            searchValue: '',
            listRemoveClient: []
        }
    },
    computed: {
        textNotification() {
            let text = this.listRemoveClient.length === 1? 'Выбран' : 'Выбрано'
            text = text + ` ${this.listRemoveClient.length} ${this.ending(this.listRemoveClient.length, 'клиент')}`
            return text
        }
    },
    components: {
        saveNotification
    },
    methods: {
        openClientsPage(id) {
            this.$router.push({ path: `banners/banner/${id}`});
        },
        handleSelectionChange(val) {
            this.listRemoveClient = val;
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
    }
})