export default {
    data() {
        return {
            tableList: [
                {
                    title: 'ID',
                    reference: 'id'
                },
                {
                    title: 'Фото',
                    reference: 'image'
                },
                {
                    title: 'Название',
                    reference: 'name'
                },
                {
                    title: 'Статус',
                    reference: 'status'
                },
            ],
            customTableData: [
                {
                    id: '1',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    hasChildren: true,
                    children: [
                        {
                            id: '123',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '2',
                    image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    hasChildren: true,
                    children: [
                        {
                            id: '123',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '3',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Показывать',
                    hasChildren: true,
                    children: [
                        {
                            id: '123',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
            ]
        }
    },
}