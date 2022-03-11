<template>
  <div class="category-page">
    <div class="page-header">
      <i class="el-icon-back" @click="goToBack"></i>
      {{data.title}}
    </div>
    <div class="category-page-container">
      <div class="left-container content">
        <section class="main" ref="main">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="data-container">
            <div class="main-item body-14-reg">
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">ID</div>
                  <el-input
                      class="inline-input"
                      v-model="data.id"
                      disabled
                  ></el-input>
                </el-col>
                <el-col class="status-container">
                  <div class="body-14-reg sub-title">Статус</div>
                  <div class="status">
                    <el-tag
                        :type="data.status === 'Показывать' ? 'success' : 'warning'"
                        class="body-14-reg status-tag"
                    >{{ data.status}}</el-tag>
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                        @click="dialogStatusVisible = true"
                    ></el-button>
                  </div>
                </el-col>
              </div>
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">Заголовок</div>
                  <el-input
                      class="inline-input"
                      v-model="data.title"
                      disabled
                  ></el-input>
                </el-col>
              </div>
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">Тип</div>
                  <el-select v-model="data.type" :placeholder="data.type">
                    <el-option
                        v-for="(item, index) in selectType"
                        :key="index"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col>
                  <div class="sub-title">Переход</div>
                  <el-select v-model="data.transition" :placeholder="data.transition">
                    <el-option
                        v-for="(item, index) in selectTransition"
                        :key="index"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </div>
              <div class="container-inputs">
                <div v-if="data.image" class="data-image">
                  <div class="head-18-s">
                    Обложка
                  </div>
                  <div v-if="imageUrl" class="image-container">
                    <img class="image" :src="imageUrl">
                    <el-button type="danger" circle class="delete-image" size="mini" @click="imageUrl = ''">&#215;</el-button>
                  </div>
                  <el-upload
                      v-else
                      action="#"
                      list-type="picture-card"
                      class="upload-image"
                      :limit="1"
                      :on-success="addImage"
                      :before-upload="beforeImageUpload"
                  >
                    <i slot="default" class="body-12-reg el-icon-camera"></i>
                    <span class="body-12-reg">Загрузить фото (файлы jpeg, png не больше 10 МБ. Разрешение 276px x 376px.)</span>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <div class="data-size">
            <div class="head-18-s">
              Размерная таблица по умолчанию
            </div>
            <el-table
                :data="tableSize"
                style="width: 716px; margin-top: 16px">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="44">
              </el-table-column>
              <el-table-column
                  prop="image"
                  label="Фото"
                  width="85">
                <template slot-scope="scope">
                  <img :src="scope.row.image" class="image">
                </template>
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название">
              </el-table-column>
              <el-table-column
                  width="40"
                  fixed="right">
                <template slot="header" slot-scope="scope" >
                  <div style="text-align: right">
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                    ></el-button>
                  </div>
                </template>
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
        <section class="product" ref="goods">
          <div class="head-24-s title">
            Товары <span class="limit"> 42</span>
          </div>
          <div class="page-content" v-if="isCustom">
            <div>
              <el-table
                  :data="categoryData.products.list"
                  style="width: 100%"
                  row-key="id"
                  :indent="0"
                  row-class-name="body-14-reg"
              >
                <el-table-column
                    prop="id"
                    label="ID"
                    width="44">
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
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="brand"
                    label="Бренд"
                    width="183"
                >
                  <template slot-scope="scope">
                    <span class="brand">
                      {{ scope.row.brand}}
                    </span>
                  </template>
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
                <el-table-column fixed="right" label="Operations">
                  <template slot="header" slot-scope="scope" >
                    <div style="text-align: right">
                      <el-button
                          icon="el-icon-edit"
                          circle
                          style="background-color: #292B33; color: white"
                      ></el-button>
                    </div>
                  </template>
                  <template slot-scope="scope">
                    <el-button icon="el-icon-right" circle></el-button>
                    <el-button type="danger" icon="el-icon-close" @click="deleteCategory" circle plain></el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                  class="pagination"
                  background
                  layout="prev, pager, next"
                  :total="25">
              </el-pagination>
            </div>
          </div>
          <el-button v-else class="btn-to-product">Перейти к товарам</el-button>
        </section>
      </div>
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
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>