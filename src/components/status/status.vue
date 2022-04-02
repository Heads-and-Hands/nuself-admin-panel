<template>
  <div :class="`status-container ${size}`">
    <el-tag
        :type="status === 'active' ? 'success' : 'warning'"
        class="body-14-reg status-tag"
    >{{ textStatus(status, type) }}</el-tag>
    <div>
      <el-button
          v-if="edit"
          icon="el-icon-edit"
          circle
          style="background-color: #292B33; color: white"
          @click="$emit('openStatusModal')"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "status",
  props: {
    status: {
      type: String,
      default: ''
    },
    type:  {
      type: String,
      default: 'active'
    },
    edit: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  methods: {
    textStatus(status, type = 'active') {
      switch (type) {
        case 'active':
          if (status === 'active') return 'Активен'
          if (status === 'inactive') return 'Неактивен'
        case 'visibility':
          if (status === 'active') return 'Показывать'
          if (status === 'inactive') return 'Не показывать'
        default:
          return status
      }
    },
  }
}
</script>

<style scoped lang="scss">

.medium {
  .el-tag.el-tag--success {
    height: 40px;
  }
}

.small {
  .el-tag.el-tag--success {
    height: 32px;
  }
}

.el-tag.el-tag--success {
  height: 40px;
  display: inline-flex !important;
  align-items: center;
}

.status-container {
  display: flex;
  .status-tag {
    margin-right: 16px;
  }
}
</style>