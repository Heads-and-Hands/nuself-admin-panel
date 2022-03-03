<template>
  <div class="sizes-page">
    <div class="head-32-s title">Таблицы размеров <span class="limit">{{ tableSize.length || 0 }}</span></div>
    <section>
      <div class="data-size">
        <el-table
            :data="tableSize"
            ref="listRemoveTable"
            style="width: 100%"
            @selection-change="handleSelectionChange"
        >
          <el-table-column
              type="selection"
              width="46">
          </el-table-column>
          <el-table-column
              prop="id"
              label="ID"
              width="65">
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
              width="110"
              fixed="right">
            <template slot="header" slot-scope="scope" >
              <div style="text-align: right">
                <el-button
                    icon="el-icon-plus"
                    circle
                    style="background-color: #292B33; color: white"
                ></el-button>
              </div>
            </template>
            <template slot-scope="scope">
              <el-button icon="el-icon-right" circle @click="openSizePage(scope.row.id)"></el-button>
              <el-button icon="el-icon-delete" type="danger" circle @click="deleteTable"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <el-pagination
        style="text-align: right; margin-top: 32px"
        background
        layout="prev, pager, next"
        :total="100">
    </el-pagination>
    <saveNotification v-show="listRemoveTable.length" type="delete" :text="`Выбрано ${listRemoveTable.length} таблицы`" @clearAll="toggleSelection()" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>