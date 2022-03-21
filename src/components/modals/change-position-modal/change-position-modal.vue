<template>
    <el-dialog
        :visible.sync="showPopupPosition"
        width="411px"
        custom-class="change-position-modal"
        :before-close="handleClose"
    >
      <div class="container">
        <span class="title head-24-s">Переместить на позицию</span>
        <el-input
            type="number"
            placeholder="Please input"
            v-model="changePosition"
        > <span class="category-count" slot="suffix">{{`/${total}`}}</span>
        </el-input>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="$emit('move', changePosition)" style="width: 314px; margin-top: 24px" >Переместить</el-button>
        </div>
      </div>
    </el-dialog>
</template>

<script>
export default {
  name: "change-position-modal",
  data() {
    return {
      changePosition: ''
    }
  },
  props: {
    showPopupPosition: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0,
    }
  },
  created() {
    this.changePosition = this.position
    console.log('this.position', this.position)
  },
  methods: {
    handleClose() {
      this.changePosition = 0
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.change-position-modal {
  text-align: center;
  border-radius: 8px !important;
  .el-dialog__body {
    padding: 0;
    .container {
      padding: 10px 28px 48px;
      width: 100%;
      box-sizing: border-box;

      .title {
        display: inline-block;
        margin-bottom: 24px;
      }

      .el-input {
        font-weight: 400;
        width: 315px;
      }

      .el-input__suffix-inner {
        display: inline-block;
        margin-top: 12px;
        margin-right: 16px;
        font-style: normal !important;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>