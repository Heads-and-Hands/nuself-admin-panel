<template>
    <el-dialog
        title="Изменить статусы"
        width="551px"
        custom-class="change-status-modal"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
    >
      <span class="subtitle body-14-reg">Выберите статус, который вы хотите установить для {{ text }}</span>
      <div class="radio-container">
          <el-radio v-for="(elem, index) in list" :key="index" v-model="valueStatus" :label="elem.label" border>
            <el-tag :type="elem.type" class="body-14-reg">{{ elem.label }}</el-tag>
          </el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="changeStatus">Применить</el-button>
          </span>
    </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        valueStatus: '',
        showList: [
          {
            label: 'Показывать',
            type: 'success'
          },
          {
            label: 'Не показывать',
            type: 'warning'
          },
        ],
        activeList: [
          {
            label: 'Активный',
            type: 'success'
          },
          {
            label: 'Неактивный',
            type: 'warning'
          },
        ]
      }
    },
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        default: 'не показывать'
      },
      text: {
        type: String,
        default: 'выбранной категории'
      },
      type: {
        type: String,
        default: 'show'
      }
    },
    computed: {
      list() {
        if (this.type === 'show') {
          return this.showList
        }
        if (this.type === 'active') {
          return this.activeList
        }
      }
    },
    created() {
      this.valueStatus = this.status
    },
    methods: {
      changeStatus() {
        this.$emit('change-status', this.valueStatus)
      },
      handleClose() {
        this.valueStatus = this.status
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
  .change-status-modal {
    height: 436px;
    border-radius: 8px !important;

    .subtitle {
      word-break: keep-all;
      line-height: 20px;
    }

    .el-dialog__header {
      padding: 40px 48px 12px;
      .el-dialog__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
      }
    }

    .el-dialog__body {
      padding: 0 48px 0;
      line-height: 16px;
      color: #202020;

      .radio-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 24px 0;
        .el-radio {
          width: 455px;
          height: 80px;
          margin-left: 0 !important;
          margin-right: 0 !important;
          display: flex;
          align-items: center;
          padding: 20px;

          &:first-child {
            margin-bottom: 16px;
          }

          .el-tag {
            height: 40px;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .el-dialog__footer {
      padding: 0 48px;

      .el-button {
        height: 40px;
        width: 100%;
      }
    }
  }
</style>

