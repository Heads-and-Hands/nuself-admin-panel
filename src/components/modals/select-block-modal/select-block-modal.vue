<template>
  <el-dialog
      title="Выберите блок"
      :visible.sync="dialogVisible"
      custom-class="select-block-modal"
      width="812px"
      :before-close="handleClose">
    <perfect-scrollbar>
      <el-radio-group v-model="radio" class="center-block">
        <el-radio
            v-for="(elem, index) in content"
            :key="index"
            :label="elem.type"
        >
          <img :src="require(`@/assets/images/select-block/${elem.type}.png`)">
          {{ elem.title }}
        </el-radio>
        <span>{{radio}}</span>
      </el-radio-group>
    </perfect-scrollbar>
    <div class="bottom-block">
      <el-button type="primary" @click="selectArticle">Добавить</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "select-block-modal",
  data() {
    return {
      radio: '',
    }
  },
  created() {
    this.radio = this.content[0].type
  },
  props: {
    content: {
      type: Array,
      default: []
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleClose() {
      this.radio = ''
      this.$emit('close')
    },
    selectArticle() {
      this.$emit('create-new-block', this.radio)
    },
  }
}
</script>

<style lang="scss" scoped>
.select-block-modal {
  .el-dialog {
    margin-top: 5vh !important;
    border-radius: 12px !important;
    height: 85vh;
    padding-top: 48px;

    .ps {
      height: calc(70vh - 90px);
      padding: 20px 48px;
    }

    &__title {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0em;
      padding-left: 28px;
    }

    &__body {
      padding: 0 !important;
      height: 70vh;

      .bottom-block {
        height: 90px;
        width: 100%;
        box-sizing: border-box;
        padding: 25px 48px;
        text-align: right;
        box-shadow: 0px -4px 12px rgba(40, 43, 52, 0.07);
      }
    }
  }
  .center-block {
    display: flex !important;
    flex-direction: column;

    .el-radio {
      width: 710px;
      height: 154px;
      border: 1px solid #DDDFE5;
      box-sizing: border-box;
      border-radius: 4px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      padding: 20px;

      img {
        margin: 0 20px;
      }

      &__label {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>