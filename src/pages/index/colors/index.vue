<template>
  <div class="colors-page table-page">
    <div class="head-32-s title">Цвета фильтров <span class="limit">{{ list ? list.length : 0 }}</span></div>
    <section>
      <el-table
          :data="list"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="ID"
            width="80">
        </el-table-column>
        <el-table-column
            prop="hex"
            label="Цвет">
          <template slot-scope="scope">
            <div class="row-color">
              <div :style="`background-color: #${scope.row.hex}`" class="item"></div>
              <span>{{scope.row.title}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            width="122">
          <template slot="header">
            <div style="text-align: right">
              <el-button
                  icon="el-icon-plus"
                  circle
                  style="background-color: #292B33; color: white"
                  @click="openPage(`colors/color/create`);"
              ></el-button>
            </div>
          </template>
          <template slot-scope="scope">
            <el-button icon="el-icon-right" circle @click="openPage(`colors/color/${scope.row.id}`)"></el-button>
            <el-button icon="el-icon-delete" type="danger" circle @click="deleteColor(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <el-pagination
        style="text-align: right; margin-top: 32px"
        background
        layout="prev, pager, next"
        :total="10">
    </el-pagination>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>