<template>
  <div class="colors-page">
    <div class="head-32-s title">Цвета <span class="limit">{{ colorsData.length }}</span></div>
    <section>
      <el-table
          :data="colorsData"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="46">
        </el-table-column>
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
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>