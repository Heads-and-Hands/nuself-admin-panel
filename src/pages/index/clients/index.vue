<template>
  <div class="clients-page table-page">
    <div class="head-32-s title">Клиенты <span class="limit">{{ clientsData.length || 0 }}</span></div>
    <el-input
        placeholder="Поиск"
        class="input-search"
        prefix-icon="el-icon-search"
        v-model="searchValue">
    </el-input>
    <section>
      <el-table
          :data="clientsData"
          ref="ordersTable"
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
            label="ФИ клиента"
        >
        </el-table-column>
        <el-table-column
            prop="status"
            label="Статус"
            width="103">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.status === 'Активен' ? 'success' : 'warning'"
                class="body-14-reg status-tag"
            >{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="phone"
            label="Телефон"
            width="171">
        </el-table-column>
        <el-table-column
            prop="email"
            label="E-mail"
        >
        </el-table-column>
        <el-table-column
            prop="city"
            label="Дата последнего входа"
            width="149">
        </el-table-column>
        <el-table-column
            width="72">
          <template slot-scope="scope">
            <el-button icon="el-icon-right" circle @click="openClientPage(scope.row.id)"
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