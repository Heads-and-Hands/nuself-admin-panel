import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"

export default {
    data() {
        return {
            clientData: {
                common: {
                    name: 'Константин',
                    surname: 'Константинопольский',
                    birthday: '30.11.1997',
                    lastLogin: '13.05.2021, 15:00',
                    status: 'Активен',
                    phone: '+7 982 974 21 68',
                    email: 'S.vasiliev@yandex.ru',
                    country: '',
                    city: '',
                },
                address: [
                    {
                        city: 'Москва',
                        street: 'Хошимина',
                        house: '24',
                        flat: '122',
                        porch: '5',
                        floor: '6',
                        intercom: '122',
                        comment: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке. Капюшон дополнен шнуром для дополнительной утяжки и защиты от ветра. Воротник-стойка. Вместительные боковые карманы. Манжеты на рукавах и штанинах. Двойной бегунок для удобства туалета\n',
                    },
                    {
                        city: 'Москва',
                        street: 'Хошимина',
                        house: '24',
                        flat: '122',
                        porch: '5',
                        floor: '6',
                        intercom: '122',
                        comment: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке. Капюшон дополнен шнуром для дополнительной утяжки и защиты от ветра. Воротник-стойка. Вместительные боковые карманы. Манжеты на рукавах и штанинах. Двойной бегунок для удобства туалета\n',
                    },
                ],
                orders: {
                    list: [
                        {
                            id: '163905',
                            date: '21.08.2021, 16:58',
                            status: 'Доставлен',
                            orderType: 'MasterCard',
                            price: '12 214',
                        },
                        {
                            id: '163906',
                            date: '21.08.2021, 16:58',
                            status: 'Доставлен',
                            orderType: 'MasterCard',
                            price: '12 214',
                        },
                    ]
                    
                }
            },
            navList: [
                {
                    title: 'Основное',
                    id: 'main'
                },
                {
                    title: 'Адреса клиента',
                    id: 'address'
                },
                {
                    title: 'Заказы',
                    id: 'orders'
                },
            ],
            dialogStatusVisible: false,
            changeStatus: ''
        }
    },
    created() {
        this.changeStatus = this.clientData.common.status
    },
    components: {
        rightSideBar
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/clients` });
        },
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        }
    }
}