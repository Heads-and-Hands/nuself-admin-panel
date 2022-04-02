<template>
  <div class="category-page" v-if="!loading">
    <div class="page-header">
      <i class="el-icon-back" @click="back()"></i>
      {{ info.name }}
    </div>
    <div class="category-page-container">
      <div class="left-container content">
        <Common :data="info" />
      </div>
      <right-side-bar :list="navList" @scrollToBlock="scrollToBlock" />
    </div>

    <el-dialog
      title="Изменить статусы"
      :visible.sync="dialogStatusVisible"
      width="551px"
      custom-class="change-status-modal"
    >
      <span class="subtitle body-14-reg">
        Выберите статус, который вы хотите истановить для выбранной категории
      </span>
      <div class="radio-container">
        <el-radio v-model="changeStatus" label="1" border>
          <el-tag type="success" class="body-14-reg">Показывать</el-tag>
        </el-radio>
        <el-radio v-model="changeStatus" label="2" border>
          <el-tag type="warning" class="body-14-reg">Не показывать</el-tag>
        </el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogStatusVisible = false">
          Применить
        </el-button>
      </span>
    </el-dialog>
    <save-notification v-show="isSaveChange" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>