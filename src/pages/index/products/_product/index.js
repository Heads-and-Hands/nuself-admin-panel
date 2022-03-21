import rightSideBar from "@/components/right-sidebar/right-sidebar.vue"
import saveNotification from "@/components/save-notification/save-notification.vue"
import Common from "./components/common.vue"
import MixinInfo from '@/mixins/infoPage'

export default {
  components: {
    rightSideBar,
    saveNotification,
    Common,
  },
  mixins: [
    MixinInfo
  ],
  data() {
    return {
      navList: [],
      imageUrl: '',
      changeStatus: '',
      dialogStatusVisible: false,
      isSaveChange: false,
      categoryData: {}
    }
  },
  mounted() {
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
    beforeImageUpload(file) {
      this.addImage(file)
      return true;
    },
    addImage(file) {
      this.imageUrl = URL.createObjectURL(file);
    },
    scrollToBlock(item) {
      let parent = document.querySelector('.main-view');
      let element = this.$refs[item];
      let top = element.offsetTop - 10;
      parent.scrollTo({ top, behavior: "smooth" });
    }
  }

}