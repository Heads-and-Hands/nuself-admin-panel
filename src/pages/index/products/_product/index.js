import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import MixinInfo from '@/mixins/infoPage'
import Common from "./components/common.vue"
import About from "./components/about.vue"
import Colors from "./components/colors.vue"

export default {
  components: {
    rightSideBar,
    saveNotification,
    Common,
    About,
    Colors,
  },
  mixins: [
    MixinInfo
  ],
  data() {
    return {
      navList: [],
      imageUrl: '',
      dialogStatusVisible: false,
      isSaveChange: false,
      categoryData: {}
    }
  },
  watch: {
    loading: {
      async handler(newValue) {
        if (newValue === false) {
          await this.$nextTick();
          this.navList = [
            {
              title: 'Основное',
              id: 'main',
              template: this.$refs.main
            },
            {
              title: 'О товаре',
              id: 'about',
              template: this.$refs.about
            },
            {
              title: 'Скидки',
              id: 'sales',
              template: this.$refs.sales
            },
            {
              title: 'Информация по поставкам',
              id: 'leftovers',
              template: this.$refs.leftovers
            },
            {
              title: 'Цветовые разновидности',
              id: 'colors',
              template: this.$refs.colors
            },
          ]
        }
      }
    }
  },
  methods: {
    deleteCategory() {
      this.$confirm('Вы уверены, что хотите удалить выбранный товар?', 'Удалить товар?', {
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
    changeStatus(status) {
      if (status) {
        this.info.status = status;
      }
      this.dialogStatusVisible = false;
    },
  }
}