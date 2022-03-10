import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"

export default {
    data() {
        return {
            orderData: {
                common: {
                    id: '2432567589',
                    creationDate: '21.08.2021, 16:58',
                    paymentDate: '13.05.2021, 15:00',
                    paymentType: 'MasterCard',
                    orderStatus: 'Доставлен',
                    paymentStatus: 'Оплачен',
                    comment: 'Облегченный комбинезон из мягкого трикотажа с петлей наизнанке. Капюшон дополнен шнуром для дополнительной утяжки и защиты от ветра. Воротник-стойка. Вместительные боковые карманы. Манжеты на рукавах и штанинах. Двойной бегунок для удобства туалета\n'
                },
                delivery: {
                    deliveryType: 'До двери',
                    trackNumber: 'G75657d',
                    date: '13.05.2021, 15:00',
                    receiverName: 'Киселев Александр Сергеевич',
                    receiverPhone: '+7 (938) 438-50-68',
                    address: 'Россия, г. Тюмень, ул. Суходольская, д. 18, кв. 39',
                },
                customer: {
                    id: '1639',
                    name: 'Иванов Иван Иванович',
                    status: 'Активен',
                    phone: '+7 982 974 21 68',
                    email: 'S.vasiliev@yandex.ru',
                    city: '',
                },
                promocodes: {
                    id: '163',
                    name: 'Название промокода',
                    sale: '15%',
                    validity: '15.08.21—15.08.21',
                    type: 'Публичный',
                    status: 'Активен',
                },
                products: {
                    list: [
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            name: 'Футболка с красным принтом...',
                            size: '36',
                            count: '1',
                            sale: '15%',
                            price: '1920',
                        },
                        {
                            id: '163',
                            image: 'https://chpic.su/_data/archived/stickers/c/ca/cats_meme.webp',
                            name: 'Футболка с красным принтом...',
                            size: '36',
                            count: '1',
                            sale: '15%',
                            price: '1920',
                        },
                    ]
                }
            },
            navList: [
                {
                    title: 'Основное',
                    id: 'common'
                },
                {
                    title: 'Доставка',
                    id: 'delivery'
                },
                {
                    title: 'Клиент',
                    id: 'customer'
                },
                {
                    title: 'Промокод',
                    id: 'promocodes'
                },
                {
                    title: 'Товары и сумма',
                    id: 'products'
                },
            ],
            isSaveChange: false
        }
    },
    computed: {
        customerTable() {
            return [JSON.parse(JSON.stringify(this.orderData.customer))]
        },
        promoTable() {
            return [JSON.parse(JSON.stringify(this.orderData.promocodes))]
        },
        sumOrder() {
            let result = this.orderData.products.list.reduce(function(sum, elem) {
                return Number(sum) + Number(elem.price)
            }, 0)
            console.log(result)
            return result
        }
    },
    components: {
        rightSideBar,
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/orders` });
        },
        scrollToBlock(item){
            let parent = document.querySelector('.main-view');
            let element = this.$refs[item];
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        }
    }
}