<template>
  <div class="catalog-page">
    <div class="page-header">Каталог</div>
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
            :tree-props="{ children: 'subcategory' }"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column
              v-for="(column, id) in tableList"
              :label="column.title"
              :key="id"
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
            <el-table-column fixed="right" label="Operations" width="200">
              <template slot="header" slot-scope="scope">
                <div style="text-align: right; padding-right: 40px">
                  <el-button
                    icon="el-icon-plus"
                    circle
                    style="background-color: #292b33; color: white"
                  ></el-button>
                </div>
              </template>
              <template slot-scope="scope">
                <el-button icon="el-icon-sort" circle @click="open"></el-button>
                <el-button icon="el-icon-right" circle></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
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
      <div class="page-content">
        <div class="content">
          <el-table
            :data="customTableData"
            style="width: 100%"
            row-key="id"
            :indent="0"
            :row-class-name="tableRowClassName"
            :tree-props="{ children: 'subcategory' }"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column v-for="column in tableList" :label="column.title">
              <template slot-scope="scope">
                <template
                  v-if="column.reference === 'image' && scope.row.image"
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
            <el-table-column fixed="right" label="Operations" width="200">
              <template slot="header" slot-scope="scope">
                <div style="text-align: right; padding-right: 40px">
                  <el-button
                    icon="el-icon-plus"
                    circle
                    style="background-color: #292b33; color: white"
                  ></el-button>
                </div>
              </template>
              <template slot-scope="scope">
                <el-button icon="el-icon-sort" circle></el-button>
                <el-button icon="el-icon-right" circle></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>