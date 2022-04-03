import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'
import Vue from "vue";

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            // info: {
            //     id: '123',
            //     title: 'orange',
            //     hex: '#F47500',
            //     image: '#',
            //     productColors: [
            //         {
            //             id: 1,
            //             title: 'какойто цвет'
            //         },
            //         {
            //             id: 2,
            //             title: 'какойто цвет'
            //         },
            //         {
            //             id: 3,
            //             title: 'какойто цвет'
            //         },
            //         {
            //             id: 4,
            //             title: 'какойто цвет'
            //         },
            //
            //     ]
            // },
            showPicker: false,
            isSaveChange: false,
            selectProductColor: [],
            ololo: ''
        }
    },
    components: {
        saveNotification
    },
    created: {
        productsColorList() {
            return this.$store.state.colors.productsColorList
        }
    },
    methods: {
        async putInfo() {
            this.loading = true;
            const action = `colors/putInfo`;
            Vue.set(this.info, "productColors", this.selectProductColor)
            const body = {
                id: this.$route.params.id,
                data: this.info
            }
            try { await this.$store.dispatch(action, body) }
            finally {
                this.getInfo()
            }
        },
        async getProductsColor() {
            this.loading = true;
            const action = `colors/getProductsColor`;
            const value = {
                search: ''
            }
            try { await this.$store.dispatch(action, value) }
            finally {
                this.getInfo()
            }
        },
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.info.hex = document.querySelector(".color-picker .el-input__inner").value
            // this.info.hex !== this.info.hex? this.isSaveChange = true : this.isSaveChange = false
        },
        save() {
            console.log('save')
            this.$route.params.id === 'create' ?  this.createNewInfo(this.info) : this.putInfo()
            this.isSaveChange = false
        },
        remove() {
            this.clear()
            if (this.$route.params.id === 'create' ) {
                this.goToBack()
            } else {
                this.deleteInfo()
            }
        },
        ololo(value) {
            console.log(value)//организовать добавление
        }
    },
}