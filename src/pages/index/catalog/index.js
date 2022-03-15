import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
    data() {
        return {
            customTableData2: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 1,
                },
                {
                    id: '2',
                    image: 'https://medialeaks.ru/wp-content/uploads/2021/09/cute-cat-japan-coronavirus-vaccine-side-effect-pfizer-moderns-reaction-photo-top-600x448.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 2,
                },
                {
                    id: '3',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Не показывать',
                    count: 3,
                },
            ],
            standartTableData: [
                {
                    id: '671',
                    image: 'https://pbs.twimg.com/media/DGuIzoRWsAAZnoD.jpg',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 4,
                    subcategory: [
                        {
                            id: '11',
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
                    count: 5,
                    subcategory: [
                        {
                            id: '21',
                            name: 'Платья',
                            status: 'Показывать',
                        },
                        {
                            id: '22',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
                {
                    id: '56',
                    image: 'https://images.glavred.info/2019_08/1564737970-1817.jpg?r=215867',
                    name: 'Распродажа',
                    status: 'Показывать',
                    count: 6,
                    subcategory: [
                        {
                            id: '31',
                            name: 'Платья',
                            status: 'Показывать',
                        }
                    ]
                },
            ],
            showPopupPosition: false,
            changePosition: '',
            standardTableData: [],
            customTableData: [],
            meta: {
                offset: 0,
                limit: 30,
            },
            arrayIndexCategory: [],
            listRemoveCatalog: [],
        }
    },
    created() {
        this.getStandardTableData()
        this.getCustomTableData()
    },
    components: {
        saveNotification
    },
    computed: {
        textNotification() {
            let text = this.listRemoveCatalog.length === 1? 'Выбрана' : 'Выбрано'
            text = text + ` ${this.listRemoveCatalog.length} ${this.ending(this.listRemoveCatalog.length, 'категор')}`
            return text
        }
    },
    methods: {
        tableRowClassName({row}) {
            if (!this.arrayIndexCategory.includes(row.id)) {
                return 'warning-row body-14-reg'
            }
            return 'body-14-reg'
        },
        openCategory(id) {
            this.$router.push({ path: `catalog/category/${id}`});
        },
        deleteCategory() {
            this.$confirm( 'Вы уверены, что хотите удалить выбранные категории?', 'Удалить категорию?',  {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your delete' + value
                });
            })
        },
        async getCustomTableData() {
            this.standardTableData = await this.$store.dispatch('catalog/getCustom', this.meta).then((data) => data.list)
            console.log('standardTableData',  this.customTableData);
        },
        async getStandardTableData() {
            this.standardTableData = await this.$store.dispatch('catalog/getStandard', this.meta).then((data) => {
                this.arrayIndexCategory = data.list.map(elem => elem.id)
                return data.list
            })
            console.log('standardTableData',  this.standardTableData);
        },
        ending(value, str){
            let ending = str;
            switch (true) {
                case value > 10 &&
                value < 20:
                    ending += "ий";
                    break;
                case value === 1:
                    ending += "ия";
                    break;
                case value > 1 &&
                value < 5:
                    ending += "ии";
                    break;
                default:
                    ending += "ий";
                    break;
            }
            return ending;
        },
        handleSelectionChange(val) {
            this.listRemoveCatalog = val;
        },
        clear() {
            this.$refs.listRemoveTable.clearSelection();
        },
        change() {
            console.log('change status')
            this.clear()
        }
    }
}