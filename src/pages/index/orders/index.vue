<template>
  <div class="colors-page">
    <div class="head-32-s title">Заказы <span class="limit">{{ ordersData.length || 0 }}</span></div>
    <section>
      <el-table
          :data="ordersData"
          ref="ordersTable"
          @selection-change="handleSelectionChange"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="id"
            label="Номер"
            width="97">
        </el-table-column>
        <el-table-column
            prop="date"
            label="Дата создания"
            width="165">
        </el-table-column>
        <el-table-column
            prop="customer"
            label="ФИ клиента"
        >
        </el-table-column>
        <el-table-column
            prop="orderStatus"
            label="Статус заказа"
            width="133">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.orderStatus === 'Доставлен' ? 'success' : 'warning'"
                class="body-14-reg status-tag"
            >{{ scope.row.orderStatus }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="paymentStatus"
            label="Статус оплаты"
            width="138">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.paymentStatus === 'Оплачен' ? 'success' : 'warning'"
                class="body-14-reg status-tag"
            >{{ scope.row.paymentStatus }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="paymentType"
            label="Способ оплаты"
            width="149">
        </el-table-column>
        <el-table-column
            prop="price"
            label="Сумма"
            width="96">
        </el-table-column>
        <el-table-column
            width="72">
          <template slot-scope="scope">
            <el-button icon="el-icon-right" circle @click="openOrderPage(scope.row.id)"
            ></el-button>
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