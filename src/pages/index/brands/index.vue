<template>
  <div class="brands-page">
    <div class="page-header">Бренды</div>
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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            v-for="(column, id) in tableColumns"
            :key="id"
            :prop="column.reference"
            :label="column.title"
            :min-width="id === 0 ? '100' : '200'"
          >
            <template slot-scope="scope">
              <template
                v-if="column.reference === 'image' && !!scope.row.image"
              >
                <img :src="scope.row.image" class="image" />
              </template>
              <template v-else-if="column.reference === 'status'">
                <el-tag type="success">{{
                  scope.row[column.reference]
                }}</el-tag>
              </template>
              <span v-else>{{ scope.row[column.reference] }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="80">
            <el-button icon="el-icon-right" circle></el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>