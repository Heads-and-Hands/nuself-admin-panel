import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'
import Vue from "vue";

export default {
    mixins: [
        MixinInfo
    ],
    data() {
        return {
            showPicker: false,
            isSaveChange: false,
            selectProductColor: [],
        }
    },
    components: {
        saveNotification
    },
    computed: {
        selectColorList() {
            let colorList =  this.$route.params.id === 'create' ? [] : this.info.productColors
            return [...this.$store.state.colors.selectColorList, ...colorList]
        },
        colorList() {
            return this.$store.getters[`colors/colorList`]
        },
    },
    created() {
        this.getProductsColor()
    },
    methods: {
        deleteCompilation() {
            this.$confirm('Вы уверены, что хотите удалить выбранный фильтр?', 'Удалить фильтр?', {
                confirmButtonText: 'Удалить',
                cancelButtonText: 'Отмена',
                customClass: 'delete-modal',
                cancelButtonClass: 'button',
                confirmButtonClass: 'button',
            }).then(() => {
                this.remove()
                this.$message({
                    type: 'success',
                    message: 'Фильтр успешно удален'
                });
            })
        },
        async putInfo(value) {
            this.loading = true;
            const action = `colors/putInfo`;
            const body = {
                id: this.$route.params.id,
                data: value
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
            await this.$store.dispatch(action, value)
        },
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.info.hex = document.querySelector(".color-picker .el-input__inner").value
            // this.info.hex !== this.info.hex? this.isSaveChange = true : this.isSaveChange = false
        },
        save() {
            Vue.set(this.info, "hex", this.info.hex.slice(1))
            Vue.set(this.info, "productColors", this.colorList)
            this.$route.params.id === 'create' ?  this.createNewInfo(this.info) : this.putInfo(this.info)
            this.isSaveChange = false
            this.clear()
        },
        remove() {
            this.clear()
            if (this.$route.params.id === 'create' ) {
                this.goToBack()
            } else {
                this.deleteInfo()
            }
        },
        saveColorList(value) {
            console.log(value)
            this.$store.commit('colors/setColorList', value)
        }
    },
}