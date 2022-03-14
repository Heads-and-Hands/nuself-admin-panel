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
                    v-model="orderData.common.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Вид превью</div>
                <el-select v-model="orderData.common.preview" :placeholder="orderData.common.preview">
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
                      :type="orderData.common.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ orderData.common.status }}</el-tag>
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
                    v-model="orderData.common.name"
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Описание для сотрудников</div>
                <el-input
                    class="inline-input"
                    v-model="orderData.common.descriptions"
                    type="textarea"
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container products" ref="products">
          <div class="head-24-s title">
            Товары  <span class="limit">{{ orderData.products.list.length }}</span>
          </div>
          <div class="products-item body-14-reg">
            <el-table
                :data="orderData.products.list"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  prop="image"
                  label="Фото"
                  width="76">
                <template slot-scope="scope">
                  <img :src="scope.row.image" class="image">
                </template>
              </el-table-column>
              <el-table-column
                  prop="article"
                  label="Артикул"
                  width="82"
              >
              </el-table-column>
              <el-table-column
                  prop="brand"
                  label="Бренд"
                  width="112">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название"
              >
              </el-table-column>
              <el-table-column
                  prop="color"
                  label="Цвет"
                  width="104">
                <template slot-scope="scope">
                    <span class="body-14-reg color">
                      <span class="color-circle" :style="`background-color: ${scope.row.color.color}`"></span>
                      {{ scope.row.color.title}}
                    </span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус"
                  width="126">
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  width="40">
                <template slot="header">
                  <div style="text-align: right">
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                    ></el-button>
                  </div>
                </template>
                <template>
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </div>
      <el-dialog
          title="Изменить статусы"
          :visible.sync="dialogStatusVisible"
          width="551px"
          custom-class="change-status-modal"
      >
        <span class="subtitle body-14-reg">Выберите статус, который вы хотите истановить для выбранной категории</span>
        <div class="radio-container">
          <el-radio v-model="changeStatus" label="Показывать" border>
            <el-tag type="success" class="body-14-reg">Показывать</el-tag>
          </el-radio>
          <el-radio v-model="changeStatus" label="Не показывать" border>
            <el-tag type="warning" class="body-14-reg">Не показывать</el-tag>
          </el-radio>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogStatusVisible = false">Применить</el-button>
        </span>
      </el-dialog>
      <save-notification v-show="isSaveChange" />
      <right-side-bar
          :list="navList"
          @scrollToBlock="scrollToBlock"/>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>