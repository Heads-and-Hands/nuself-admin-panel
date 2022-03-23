<template>
  <div class="users-page table-page">
    <div class="head-32-s title">Пользователи <span class="limit">{{ tableSales.length || 0 }}</span></div>
    <section>
      <div class="data-table">
        <el-table
            :data="tableSales"
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
              prop="name"
              label="ФИО"
              width="254">
          </el-table-column>
          <el-table-column
              prop="status"
              label="Статус"
              width="133">
            <template slot-scope="scope">
              <el-tag
                  :type="scope.row.status === 'Активен' ? 'success' : 'warning'"
                  class="body-14-reg status-tag"
              >{{ scope.row.status}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
              prop="role"
              label="Роль"
              width="185">
          </el-table-column>
          <el-table-column
              prop="email"
              label="E-mail">
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
        :text="textNotification"
        @clear="clear"
        @remove="remove"
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