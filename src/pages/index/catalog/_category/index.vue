<template>
  <div class="category-page">
    <div class="page-header">
      <i class="el-icon-back" @click="goToBack"></i>{{categoryData.common.name}}</div>
    <div class="category-page-container">
      <div class="left-container content">
        <section class="main" ref="main">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="data-container">
            <div class="name">
              <div class="body-14-reg sub-title">Название категории</div>
              <el-input
                  placeholder="Please input"
                  v-model="categoryData.common.name"
                  :value="categoryData.common.name"
                  clearable
                  :disabled="isCustom">
              </el-input>
            </div>
            <div class="id">
              <div class="body-14-reg sub-title">ID</div>
              <el-input
                  v-model="categoryData.common.id"
                  :value="categoryData.common.id"
                  clearable
                  disabled
              >
              </el-input>
            </div>
            <div class="status">
              <div class="body-14-reg sub-title">Статус</div>
              <el-tag
                  type="success"
                  class="status-tag"
              >{{ categoryData.common.status }}</el-tag>
            </div>
            <div>
              <el-button
                  icon="el-icon-edit"
                  circle
                  style="background-color: #292B33; color: white"></el-button>
            </div>
          </div>
          <div class="data-image">
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
                    <el-tag type="success" class="body-14-reg">{{ scope.row.status}}</el-tag>
                  </template>
                </el-table-column>
<!--                <el-table-column-->
<!--                    v-for="(column, index) in categoryData.products.column"-->
<!--                    :key="index"-->
<!--                    :label="column.title"-->
<!--                    :width="returnStyle(column)"-->
<!--                    header-cell-class-name="body-14-s"-->
<!--                    cell-class-name="body-14-reg"-->
<!--                >-->
<!--                  <template slot-scope="scope">-->
<!--                    <template v-if="column.reference === 'image' && scope.row.image">-->
<!--                      <img :src="scope.row.image" class="image">-->
<!--                    </template>-->
<!--                    <template v-else-if="column.reference === 'status'">-->
<!--                      <el-tag type="success" class="body-14-reg">{{ scope.row[column.reference]}}</el-tag>-->
<!--                    </template>-->
<!--                    <template v-else-if="column.reference === 'color'">-->
<!--                    <span class="body-14-reg color">-->
<!--                      <span class="color-circle" :style="`background-color: ${scope.row[column.reference].color}`"></span>-->
<!--                      {{ scope.row[column.reference].title}}-->
<!--                    </span>-->
<!--                    </template>-->
<!--                    <template v-else-if="column.reference === 'id'">-->
<!--                      <span class="body-14-reg id">{{scope.row[column.reference]}}</span>-->
<!--                    </template>-->
<!--                    <span v-else class="body-14-reg">{{scope.row[column.reference]}}</span>-->
<!--                  </template>-->
<!--                </el-table-column>-->
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
            </div>
          </div>
          <el-button v-else class="btn-to-product">Перейти к товарам</el-button>
        </section>
      </div>
      <right-side-bar
          :list="navList"
          @scrollToBlock="scrollToBlock"></right-side-bar>
    </div>

  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>