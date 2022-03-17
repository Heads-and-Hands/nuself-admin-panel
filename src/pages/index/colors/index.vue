<template>
  <div class="colors-page table-page">
    <div class="head-32-s title">Цвета <span class="limit">{{ colorsData.length || 0 }}</span></div>
    <section>
      <el-table
          :data="colorsData"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="ID"
            width="80">
        </el-table-column>
        <el-table-column
            prop="color"
            label="Цвет">
          <template>
            <div class="row-color">
              <el-badge is-dot class="item" />
              <span>color</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            width="72">
          <template slot-scope="scope">
            <el-button icon="el-icon-right" circle @click="openColorPage(scope.row.id)"></el-button>
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