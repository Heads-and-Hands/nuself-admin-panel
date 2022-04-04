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
            selectSearch: ''
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
            console.log('getProductsColor')
            this.loading = true;
            const action = `colors/getProductsColor`;
            const value = {
                search: this.selectSearch
            }
            await this.$store.dispatch(action, value)
            this.searchSelectValue()
        },
        goToBack() {
            this.$router.push({ path: `/colors` });
        },
        changeColor() {
            this.info.hex = document.querySelector(".color-picker .el-input__inner").value
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
            this.$store.commit('colors/setColorList', value)
        },
        searchSelectValue() {
            let input = document.querySelector("div.select-color input")
            input.addEventListener('input', (event) => {
                if (this.selectSearch !== event.target.value) {
                    this.selectSearch = event.target.value;
                    this.getProductsColor()
                }
            })
        }
    },
}