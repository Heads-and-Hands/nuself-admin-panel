<template>
  <div class="separate-page color-page">
    <div class="page-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{ info && info.title? info.title : 'Название цвета фильтра' }}
    </div>
    <section v-if="info" class="page-container color-container">
      <div class="head-24-s title">
        Основное
      </div>
      <el-col>
        <div class="sub-title body-14-reg">ID</div>
        <el-input
            v-model="info.id"
            disabled>
        </el-input>
      </el-col>
      <el-col>
        <div class="sub-title body-14-reg">Название цвета фильтров</div>
        <el-input
            v-model="info.title">
        </el-input>
      </el-col>
      <el-col>
        <div class="sub-title body-14-reg">Значение</div>
        <el-input
            :color="info.hex"
            v-model="info.hex"
            @focus="showPicker = true"
            clearable
        >
        </el-input>
        <div v-show="showPicker" class="block" @mouseleave="showPicker = false">
          <el-color-picker
              v-model="info.hex"
              popper-class="palette"
              class="color-picker"
              @mouseout.native="changeColor()"
          >
          </el-color-picker>
        </div>
      </el-col>
      <el-col>
        <div class="sub-title body-14-reg">Цвета товаров</div>
        <el-select
            :value="colorList"
            @change="saveColorList"
            multiple
            filterable
            default-first-option
            class="select-color"
            popper-class="body-14-reg"
            placeholder="Найти цвета товаров">
          <el-option
               v-for="item in selectColorList"
              :key="item.id"
              :label="item.title"
              :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </section>
    <save-notification @clear="clear" remove change @save="save" @remove="deleteCompilation"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>