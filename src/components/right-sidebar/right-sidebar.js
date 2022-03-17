export default {
    data() {
        return {
            selectItem: ''
        }
    },
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    mounted() {
        this.selectItem = this.list[0].id
    },
    methods: {
        scrollMeTo(row) {
            if (row) {
                this.selectItem = row.id
                this.$emit('scrollToBlock', this.selectItem)
            }
        }
        // В родителе ключ через ref
        // Пример метода в родителе
        // scrollToBlock(item){
        //     let parent = document.querySelector('.main-view');
        //     let element = this.$refs[item];
        //     let top = element.offsetTop - 10;
        //     parent.scrollTo({top, behavior: "smooth"});
        // }
    }
}