<template>
  <div class="orders-page table-page">
    <div class="head-32-s title">Рубрики <span class="limit">{{ rubricsData.length || 0 }}</span></div>
    <section>
      <el-table
          :data="rubricsData"
          ref="ordersTable"
          @selection-change="handleSelectionChange"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="46">
        </el-table-column>
        <el-table-column
            prop="id"
            label="ID"
            width="66">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Название"
            width="120">
        </el-table-column>
        <el-table-column
            prop="status"
            label="Статус"
            width="126">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
                class="body-14-reg status-tag"
            >{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="description"
            label="Описание для сотрудников">
        </el-table-column>
        <el-table-column
            width="200">
          <template slot="header">
            <div style="text-align: right">
              <el-button
                  icon="el-icon-plus"
                  circle
                  style="background-color: #292B33; color: white"
                  @click="dialogTablesVisible = true"
              ></el-button>
            </div>
          </template>
          <template slot-scope="scope">
            <span class="order-num"> {{ scope.row.count }} </span>
            <el-button icon="el-icon-sort" circle @click="showPopupPosition = true"></el-button>
            <el-button icon="el-icon-right" circle @click="openRubricsPage(scope.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteRubrics()"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <el-pagination
        style="text-align: right; margin-top: 32px"
        background
        layout="prev, pager, next"
        :total="100">
    </el-pagination>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>