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
          <el-table-column prop="date" label="Date" width="150">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="state" label="State" width="120">
          </el-table-column>
          <el-table-column prop="city" label="City" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="Zip" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="Operations" width="120">
            <el-button type="text" size="small">Edit</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>