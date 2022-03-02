<template>
  <div class="save-notification">
    <div class="body-14-reg text"><el-badge is-dot class="item" />Есть несохраненные изменения</div>
    <div>
      <el-button class="remove" @click="$emit('clearAll')">Сбросить изменения</el-button>
      <el-button class="save">Сохранить изменения</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "save-notification"
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
    
    .item {
      margin-top: 12px;
      margin-right: 12px;
    }
  }

  .save {
    background-color: #292B33 !important;
    color: #FFFFFF;
  }
}
</style>