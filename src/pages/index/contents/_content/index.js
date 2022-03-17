import saveNotification from "@/components/save-notification/save-notification.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

export default {
    data() {
        return {
            tableContent: {
                id: '1R1469',
                title: 'Название статьи',
                status: 'Показывать',
                type: 'Статья',
                rubric: 'Люди',
                album: [
                    {
                        id: '1234',
                        imagePath: 'https://static.ngs.ru/news/99/preview/b62c41190a514b3428cb96498d0c3acc0b2ef73e_599_399_c.jpg',
                        order: 1
                    },
                    {
                        id: '1234',
                        imagePath: 'https://4tololo.ru/sites/default/files/field/image/catman-1_0.jpg',
                        order: 2
                    },
                ],
                article: [
                    {
                       type: 'annotation',
                       value: 'Контур четче, кожа более упругая, отеков след простыл — так выглядит стандартный' +
                           'набор восторженных отзывов о микротоковой терапии. Рассказываем, что из этого правда и' +
                           ' почему ближайшее время микротоки точно будут одной из самых популярных домашних процедур.'
                    },
                    {
                        type: 'text',
                        value: 'Контур четче, кожа более упругая, отеков след простыл — так выглядит стандартный ' +
                            'набор восторженных отзывов о микротоковой терапии. Рассказываем, что из этого правда и ' +
                            'почему ближайшее время микротоки точно будут одной из самых популярных домашних' +
                            ' бьюти-процедур. \n' +
                            'Начнем с того, что сама технология изобретена давно — к этой физиотерапевтической' +
                            ' процедуре прибегали еще советские специалисты. А современные косметологи нередко ' +
                            'используют микротоковую терапию в комплексе с другими процедурами вроде чистки или ' +
                            'массажа. Но стать частью домашней бьюти-рутины микротокам было суждено только сейчас.'
                    },
                    {
                        type: 'image',
                        value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66aqFR110FWudIMHfZR2PTPj-hmMPlSDcDg&usqp=CAU'
                    },
                    {
                        type: 'carousel',
                        value: ''
                    },
                    {
                        type: 'video',
                        value: ''
                    },
                    {
                        type: 'tile',
                        value: ''
                    },
                ],
                goods: [],
                similary: []
            },
            data: {},
            selectType: [
                {
                    value: 'Статья'
                },
                {
                    value: 'Видео'
                },
                {
                    value: 'События'
                }
            ],
            selectRubric: [
                {
                    value: 'Люди'
                },
                {
                    value: 'Нелюди'
                },
            ],
            dialogStatusVisible: false,
            isSaveChange: false,
            imageUrl: '',
            imageUrl2: ''
        }
    },
    created() {
        this.data = JSON.parse(JSON.stringify(this.tableContent))
        this.imageUrl = this.data.album[0].imagePath
        this.imageUrl2 = this.data.album[1].imagePath
    },
    computed: {
        isChange() {
            return JSON.stringify(this.data) !== JSON.stringify(this.tableContent)
        }
    },
    components: {
        saveNotification,
        toggleStatus
    },
    methods: {
        goToBack() {
            this.$router.push({ path: `/contents` });
        },
        beforeImageUpload(file) {
            this.addImage(file)
            return true;
        },
        beforeImageUploadTwo(file) {
            this.addImageTwo(file)
            return true;
        },
        addImage(file) {
            this.imageUrl = URL.createObjectURL(file);
        },
        addImageTwo(file) {
            this.imageUrl2 = URL.createObjectURL(file);
        },
        changeStatus(status) {
            if (status) {
                this.data.status = status
            }
            this.dialogStatusVisible = false
        },
        clear() {
            this.data = JSON.parse(JSON.stringify(this.tableContent))
        },
        remove() {
            console.log('remove')
            this.clear()
        },
        save() {
            console.log('save')
            this.clear()
        },
    }
}