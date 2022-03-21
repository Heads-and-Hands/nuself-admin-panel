export default {
    data() {
        return {
            selectItem: ''
        }
    },
    props: {
        list: Array
    },
    mounted() {
        this.selectItem = this.list[0].id;
    },
    methods: {
        scrollMeTo(row) {
            this.selectItem = row.id;
            let parent = document.querySelector('.main-view');
            let element = row.template;
            let top = element.offsetTop - 10;
            parent.scrollTo({top, behavior: "smooth"});
        }
    }
}