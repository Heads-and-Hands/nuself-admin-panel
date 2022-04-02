<template>
  <div class="products-page">
    <div class="page-header">Товары</div>
    <div class="page-content">
      <div class="content-header">
        <el-input
          placeholder="Поиск"
          prefix-icon="el-icon-search"
          v-model="searchParams.search"
        />
        <el-select placeholder="Статус" v-model="searchParams.status">
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="content">
        <el-table :data="list" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            v-for="(column, id) in tableColumns"
            :key="id"
            :prop="column.reference"
            :label="column.title"
            :min-width="column.width"
          >
            <template slot-scope="scope">
              <template v-if="column.reference === 'mainImage'">
                <img :src="scope.row.mainImage" class="image" />
              </template>
              <template v-else-if="column.reference === 'status'">
                <el-tag type="success">{{
                  scope.row[column.reference]
                }}</el-tag>
              </template>
              <template v-else-if="column.reference === 'color'">
                <div class="row-color">
                  <el-badge is-dot class="item" />
                  <span>color</span>
                </div>
              </template>
              <template v-else>
                <span>{{ scope.row[column.reference] }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="80">
            <el-button
              icon="el-icon-right"
              slot-scope="scope"
              circle
              @click="openPage(`/products/product/${scope.row.id}`)"
            ></el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination
      style="text-align: right; margin-top: 32px"
      background
      layout="prev, pager, next"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>