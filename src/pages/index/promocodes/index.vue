<template>
  <div class="Sales-page table-page">
    <div class="head-32-s title">Промокоды <span class="limit">{{ list? list.length : 0 }}</span></div>
    <section>
      <div class="data-table">
        <el-table
            :data="list"
            ref="listRemoveTable"
            style="width: 100%"
            @selection-change="handleSelectionChange"
        >
          <el-table-column
              prop="id"
              label="ID"
              width="66">
          </el-table-column>
          <el-table-column
              prop="name"
              label="Название">
          </el-table-column>
          <el-table-column
              prop="sale"
              label="Величина скидки"
              width="130">
            <template slot-scope="scope">
              <span>{{ scope.row.sale + '%' }}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="status"
              label="Статус"
              width="120">
            <template slot-scope="scope">
              <status-btn
                  :status="scope.row.status"
                  type="active"
                  size="small"
              />
            </template>
          </el-table-column>
          <el-table-column
              prop="conditions[0].type"
              label="Условие"
              width="191">
            <template slot-scope="scope">
                <span>{{ textConditions(scope.row.conditions[0].type) }}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="code"
              label="Код"
              width="191">
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
                    @click="$router.push({ path: `promocodes/promocode/create`});"
                ></el-button>
              </div>
            </template>
            <template slot-scope="scope">
              <el-button icon="el-icon-right" circle @click="openPage(scope.row.id)"></el-button>
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