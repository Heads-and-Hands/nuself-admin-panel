<template>
  <div class="compilation-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Подборка
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">ID</div>
                <el-input
                    class="inline-input"
                    v-model="data.common.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Вид превью</div>
                <el-select v-model="data.common.preview" :placeholder="data.common.preview">
                  <el-option
                      v-for="(item, index) in selectType"
                      :key="index"
                      :label="item.value"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <el-tag
                      :type="data.common.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ data.common.status }}</el-tag>
                  <div>
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                        @click="dialogStatusVisible = true"
                    ></el-button>
                  </div>
                </div>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="info">
                <div class="sub-title">Название</div>
                <el-input
                    class="inline-input"
                    v-model="data.common.name"
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Описание для сотрудников</div>
                <el-input
                    class="inline-input"
                    v-model="data.common.descriptions"
                    type="textarea"
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container products" ref="products">
          <div class="head-24-s title">
            Товары  <span class="limit">{{ data.products.list.length }}</span>
          </div>
          <div class="products-item body-14-reg">
            <table-products
                :data="data.products"
            />
          </div>
        </section>
      </div>
      <right-side-bar v-if="navList.length" :list="navList"/>
    </div>
    <toggle-status
        :dialogVisible="dialogStatusVisible"
        :status="data.common.status"
        text="выбранной подборки"
        @close="dialogStatusVisible = false"
        @change-status="changeStatus"
    />
    <save-notification v-show="isSaveChange" remove change @remove="remove" @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>