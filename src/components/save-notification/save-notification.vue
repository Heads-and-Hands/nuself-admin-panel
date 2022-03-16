<template>
  <div class="save-notification body-14-reg">
    <div v-if="change" class="text"><el-badge is-dot class="item" />Есть несохраненные изменения</div>
    <div v-if="text" class="text">{{text}}<i class="el-icon-close close" @click="$emit('clear')"></i></div>
    <div v-else></div>
    <div>
      <el-button
          v-if="remove"
          class="delete"
          icon="el-icon-delete"
          type="danger"
          @click="$emit('remove')"
          plain
      >
        Удалить
      </el-button>
      <el-button
          v-if="save"
          class="btn-black"
      >
        Сохранить
      </el-button>
      <el-button
          v-if="status"
          class="btn-black"
          @click="$emit('change')"
          plain
      >
        Изменить статусы
      </el-button>
      <template v-if="change">
        <el-button class="cancel-change" @click="$emit('clear')">Сбросить изменения</el-button>
        <el-button class="btn-black" @click="$emit('save')">Сохранить изменения</el-button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "save-notification",
  props: {
    remove: {
      type: Boolean,
      default: false
    },
    change: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
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

  .btn-black {
    background-color: #292B33 !important;
    color: #FFFFFF !important;
    &:hover {
      background-color: #34363D !important;
      color: #FFFFFF;
    }
    &:active {
      background-color: #000000 !important;
    }
  }
}
</style>