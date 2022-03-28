<template>
  <div class="Sales-page table-page">
    <div class="head-32-s title">Скидки <span class="limit">{{ list ? list.length : 0 }}</span></div>
    <section>
      <div class="data-table">
        <el-table
            :data="list"
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
              width="66">
          </el-table-column>
          <el-table-column
              prop="name"
              label="Название"
              width="155">
          </el-table-column>
          <el-table-column
              prop="sale"
              label="Величина скидки"
              width="77">
          </el-table-column>
          <el-table-column
              prop="status"
              label="Статус"
              width="126">
            <template slot-scope="scope">
              <el-tag
                  :type="scope.row.status === 'Активна' ? 'success' : 'warning'"
                  class="body-14-reg status-tag"
              >{{ scope.row.status}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
              prop="validity"
              label="Срок действия">
          </el-table-column>
          <el-table-column
              prop="subjectType"
              label="Тип субъекта">
          </el-table-column>
          <el-table-column
              prop="subject"
              label="Субъект">
          </el-table-column>
          <el-table-column
              width="123"
              fixed="right">
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
              <el-button icon="el-icon-right" circle @click="openSalesPage(scope.row.id)"></el-button>
              <el-button icon="el-icon-delete" type="danger" circle @click="deleteBanner"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <toggle-status
        :dialogVisible="dialogStatusVisible"
        type="active"
        status="Активный"
        text="выбранных скидок"
        @close="closeToggleStatus"
        @change-status="changeStatus"
    />
    <save-notification
        v-show="listRemoveSales.length"
        remove
        status
        :text="textNotification"
        @clear="clear"
        @remove="remove"
        @change="change"
    />
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