<template>
  <div class="save-notification body-14-reg">
    <div v-if="type === 'save' || type === 'all'" class="text"><el-badge is-dot class="item" />Есть несохраненные изменения</div>
    <div v-else class="text">{{text}}<i class="el-icon-close close" @click="$emit('clearAll')"></i></div>
    <div>
      <el-button
          v-if="type === 'delete' || type === 'all'"
          class="delete"
          icon="el-icon-delete"
          type="danger"
          plain
      >
        Удалить
      </el-button>
      <template v-if="type === 'save' || type === 'all'">
        <el-button class="cancel-save" @click="$emit('clearAll')">Сбросить изменения</el-button>
        <el-button class="save">Сохранить изменения</el-button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "save-notification",
  props: {
    type: {
      type: String,
      default: 'save'
    },
    text: {
      type: String,
      default: 'Есть несохраненные изменения'
    }
  }
}
</script>

<style scoped lang="scss">
.save-notification {
  z-index: 2000;
  height: 90px;
  width: calc(100% - 256px);
  position: fixed;
  bottom: 0;
  left: 256px;
  background: #FFFFFF;
  box-shadow: 0px -4px 12px rgba(40, 43, 52, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 48px;
  box-sizing: border-box;

  .text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #292B33;
    
    .item {
      margin-top: 12px;
      margin-right: 12px;
    }

    .close {
      cursor: pointer;
      margin-top: 2px;
      margin-left: 10px;
      color: #C1C4CB;
    }
  }

  .save {
    background-color: #292B33 !important;
    color: #FFFFFF;
  }
}
</style>