<template>
  <div class="compilations-page table-page">
    <div class="head-32-s title">Подборки <span class="limit">{{ list? list.length : 0 }}</span></div>
    <el-input
        placeholder="Поиск"
        class="input-search"
        prefix-icon="el-icon-search"
        v-model="searchValue">
    </el-input>
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
              width="65">
          </el-table-column>
          <el-table-column
              prop="name"
              label="Название"
              width="257">
          </el-table-column>
          <el-table-column
              prop="previewType"
              label="Вид превью"
              width="118">
            <template slot-scope="scope">
              <span>{{textConditions(scope.row.previewType)}}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="status"
              label="Статус"
              width="126">
            <template slot-scope="scope">
              <status-btn
                  :status="scope.row.status"
                  type="visibility"
                  size="small"
              />
            </template>
          </el-table-column>
          <el-table-column
              prop="description"
              label="Описание для сотрудников">
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
                    @click="openPage(`compilations/compilation/create`);"
                ></el-button>
              </div>
            </template>
            <template slot-scope="scope">
              <el-button icon="el-icon-right" circle @click="openPage(`/compilations/compilation/${scope.row.id}`)"></el-button>
              <el-button icon="el-icon-delete" type="danger" circle @click="deleteCompilation(scope.row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <toggle-status
        :dialogVisible="dialogStatusVisible"
        type="visibility"
        status="active"
        text="выбранных подборок"
        @change-status="changeAllStatus"
        @close="this.dialogStatusVisible = false"
    />
    <save-notification
        v-show="listRemoveCompilations.length"
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
        :total="10">
    </el-pagination>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>