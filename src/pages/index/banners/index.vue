<template>
  <div class="banners-page table-page">
    <div class="head-32-s title">Баннеры <span class="limit">{{ tableBanners.length || 0 }}</span></div>
    <section>
      <div class="data-table">
        <el-table
            :data="tableBanners"
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
              prop="image"
              label="Фото"
              width="170">
            <template slot-scope="scope">
              <img :src="scope.row.image" class="image">
            </template>
          </el-table-column>
          <el-table-column
              prop="title"
              label="Заголовок">
          </el-table-column>
          <el-table-column
              prop="type"
              label="Тип"
              width="126">
          </el-table-column>
          <el-table-column
              prop="transition"
              label="Переход"
              width="132">
          </el-table-column>
          <el-table-column
              prop="status"
              label="Статус"
              width="171">
            <template slot-scope="scope">
              <el-tag
                  :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
                  class="body-14-reg status-tag"
              >{{ scope.row.status}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
              width="122"
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
              <el-button icon="el-icon-right" circle @click="openBannerPage(scope.row.id)"></el-button>
              <el-button icon="el-icon-delete" type="danger" circle @click="deleteBanner"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <toggle-status
        :dialogVisible="dialogStatusVisible"
        status="Показывать"
        text="выбранных баннеров"
        @close="closeToggleStatus"
        @change-status="changeStatus"
    />
    <save-notification
        v-show="listRemoveBanner.length"
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
        :total="10">
    </el-pagination>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>