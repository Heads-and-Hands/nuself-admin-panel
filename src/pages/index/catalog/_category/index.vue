<template>
  <div class="category-page">
    <div class="page-header">
      <i class="el-icon-back" @click="goToBack"></i>{{categoryData.common.name}}</div>
    <div class="left-container content">
      <section class="main">
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
                clearable>
            </el-input>
          </div>
          <div class="id">
            <div class="body-14-reg sub-title">ID</div>
            <el-input
                v-model="categoryData.common.id"
                :value="categoryData.common.id"
                clearable>
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
          <img v-if="categoryData.common.image" :src="categoryData.common.image">
        </div>
      </section>
      <section class="product">
        <div class="head-24-s title">
          Товары <span class="limit"> 42</span>
        </div>
        <div class="page-content">
          <div>
            <el-table
                :data="categoryData.products.list"
                style="width: 100%"
                row-key="id"
                :indent="0"
                :row-class-name="tableRowClassName"
            >
              <el-table-column
                  v-for="(column, index) in categoryData.products.column"
                  :key="index"
                  :label="column.title"
                  :width="returnStyle(column)"
              >
                <template slot-scope="scope">
                  <template v-if="column.reference === 'image' && scope.row.image">
                    <img :src="scope.row.image" class="image">
                  </template>
                  <template v-else-if="column.reference === 'status'">
                    <el-tag type="success" class="body-14-reg">{{ scope.row[column.reference]}}</el-tag>
                  </template>
                  <template v-else-if="column.reference === 'color'">
                    <span class="body-14-reg color">
                      <span class="color-circle" :style="`background-color: ${scope.row[column.reference].color}`"></span>
                      {{ scope.row[column.reference].title}}
                    </span>
                  </template>
                  <template v-else-if="column.reference === 'id'">
                    <span class="body-14-reg id">{{scope.row[column.reference]}}</span>
                  </template>
                  <span v-else class="body-14-reg">{{scope.row[column.reference]}}</span>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="Operations" width="183" >
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
                  <span class="body-14-s order">{{scope.row.order}}</span>
                  <el-button icon="el-icon-sort" circle></el-button>
                  <el-button icon="el-icon-right" circle></el-button>
                  <el-button type="danger" plain icon="el-icon-close" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </section>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>