<template>
  <div class="catalog-page">
    <div class="head-32-s page-header">Каталог</div>
    <section>
      <div class="page-header-second">
        Кастомные категории
        <span class="limit"> {{ customTableData.length }}</span>
      </div>
      <div class="page-content">
        <div class="content">
          <el-table
            :data="customTableData"
            style="width: 100%"
            row-key="id"
            :indent="0"
            :row-class-name="tableRowClassName"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="id" label="ID" width="79"> </el-table-column>
            <el-table-column prop="image" label="Фото" width="159">
              <template slot-scope="scope">
                <img
                  v-if="!!scope.row.image"
                  :src="scope.row.image"
                  class="image"
                />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Название" width="275">
            </el-table-column>
            <el-table-column prop="status" label="Статус">
              <template slot-scope="scope">
                <el-tag
                  :type="
                    scope.row.status === 'Показывать' ? 'success' : 'warning'
                  "
                  class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="200">
              <template slot="header" slot-scope="scope">
                <el-button
                  icon="el-icon-plus"
                  circle
                  style="background-color: #292b33; color: white"
                  @click="openCategory('new-category')"
                  position-modal
                ></el-button>
              </template>
              <template slot-scope="scope">
                <span class="count">{{scope.row.count}}</span>
                <el-button icon="el-icon-sort" circle @click="showPopupPosition = true"></el-button>
                <el-button icon="el-icon-right" circle @click="openCategory(scope.row.id)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteCategory()"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </section>
    <section>
      <div class="page-header-second">
        Стандартные категории
        <span class="limit"> {{ customTableData.length }}</span>
      </div>
      <div class="filter">
        <el-input placeholder="Поиск" v-model="searchValue">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-select
          v-model="selectValue"
          placeholder="Статус"
          popper-class="select"
          size="large"
          clearable
          popper-append-to-body
        >
          <el-option
            v-for="item in selectList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="page-content">
        <div class="content">
          <el-table
            :data="standartTableData"
            style="width: 100%"
            row-key="id"
            :indent="0"
            :row-class-name="tableRowClassName"
            :tree-props="{ children: 'subcategory' }"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="id" label="ID" width="79"> </el-table-column>
            <el-table-column prop="image" label="Фото" width="159">
              <template slot-scope="scope">
                <img
                  v-if="!!scope.row.image"
                  :src="scope.row.image"
                  class="image"
                />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Название" width="275">
            </el-table-column>
            <el-table-column prop="status" label="Статус">
              <template slot-scope="scope">
                <el-tag
                  :type="
                    scope.row.status === 'Показывать' ? 'success' : 'warning'
                  "
                  class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="" width="149">
              <template slot-scope="scope">
                <span class="count">{{scope.row.count}}</span>
                <el-button icon="el-icon-sort" circle @click="showPopupPosition = true"></el-button>
                <el-button icon="el-icon-right" circle @click="openCategory(scope.row.id)"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-dialog
            :visible.sync="showPopupPosition"
            width="411px"
            custom-class="change-position-modal"
        >
          <div class="container">
            <span class="title head-24-s">Переместить на позицию</span>
            <el-input
                type="text"
                placeholder="Please input"
                v-model="changePosition"
            > <span class="category-count" slot="suffix">{{`/${standartTableData.length}`}}</span>
            </el-input>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogStatusVisible = false" style="width: 314px; margin-top: 24px" >Переместить</el-button>
            </div>
          </div>
        </el-dialog>
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>