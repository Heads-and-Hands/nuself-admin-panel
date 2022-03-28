import MixinList from '@/mixins/tableList'

export default {
    data() {
        return {
            colorsData: [
                {
                    id: '1',
                    color: {
                        id: '123',
                        title: 'orange',
                        color: '#F47500',
                        image: '#'
                    }
                },
                {
                    id: '2',
                    color: {
                        id: '123',
                        title: 'orange',
                        color: '#F47500',
                        image: '#'
                    }
                },
                {
                    id: '3',
                    color: {
                        id: '123',
                        title: 'orange',
                        color: '#F47500',
                        image: '#'
                    }
                },
                {
                    id: '4',
                    color: {
                        id: '123',
                        title: 'orange',
                        color: '#F47500',
                        image: '#'
                    }
                },
            ],
            data: {}
        }
    },
    created() {
        this.data = JSON.parse(JSON.stringify(this.colorsData))
        // this.data = JSON.parse(JSON.stringify(this.list)) - изменить при готовности запроса
    },
    mixins: [
        MixinList
    ],
}