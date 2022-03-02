<template>
  <div class="color-page">
    <div class="page-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Цвет
    </div>
    <section class="color-container">
      <div class="head-24-s title">
        Основное
      </div>
      <el-col>
        <div class="sub-title body-14-reg">ID</div>
        <el-input
            v-model="color.id"
            disabled>
        </el-input>
      </el-col>
      <el-col>
        <div class="sub-title body-14-reg">Цвет</div>
        <el-input
            v-model="color.title"
            disabled>
        </el-input>
      </el-col>
      <el-col>
        <div class="sub-title body-14-reg">Значение</div>
        <el-input
            :color="color.color"
            v-model="customImage"
            @focus="showPicker = true"
            clearable
        >
        </el-input>
        <div v-show="showPicker" class="block" @mouseleave="showPicker = false">
          <el-color-picker
              v-model="customImage"
              popper-class="palette"
              class="color-picker"
              @mouseout.native="changeColor()"
          >
          </el-color-picker>
        </div>
      </el-col>
    </section>
    <saveNotification v-show="isSaveChange" @clearAll="clearAll()" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>