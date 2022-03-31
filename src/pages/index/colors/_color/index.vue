<template>
  <div class="separate-page color-page">
    <div class="page-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{ info.title || 'Название цвета фильтра' }}
    </div>
    <section class="page-container color-container">
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
            :color="info.color"
            v-model="info.color"
            @focus="showPicker = true"
            clearable
        >
        </el-input>
        <div v-show="showPicker" class="block" @mouseleave="showPicker = false">
          <el-color-picker
              v-model="info.color"
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
            v-model="selectProducColor"
            multiple
            filterable
            allow-create
            default-first-option
            popper-class="body-14-reg"
            placeholder="Найти цвета товаров">
          <el-option
              v-for="item in productColors"
              :key="item.id"
              :label="item.title"
              :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </section>
    <save-notification v-show="isSaveChange" @clear="clearAll()" change @save="save"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>