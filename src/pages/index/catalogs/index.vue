<template>
  <div class="catalog-page table-page">
    <div class="head-32-s title">Каталог</div>
    <section>
      <div class="head-24-s">
        Стандартные категории
        <span class="limit"> {{ list ? list.length : 0 }}</span>
      </div>
      <div class="page-content">
        <el-table
          :data="list"
          style="width: 100%"
          row-key="id"
          :indent="0"
          ref="listRemoveTable"
          row-class-name="body-14-reg"
          @selection-change="handleSelectionChange"
          :tree-props="{ children: 'subcategory' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="ID" width="79"> </el-table-column>
          <el-table-column prop="image" label="Фото" width="159">
            <template slot-scope="scope">
              <img
                v-if="!!scope.row.image"
                :src="scope.row.image"
                class="image"
              />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Название" width="275">
          </el-table-column>
          <el-table-column prop="status" label="Статус">
            <template slot-scope="scope">
              <status-btn
                  :status="scope.row.status"
                  type="visibility"
                  size="small"
              />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="" width="149">
            <template slot-scope="scope">
              <span class="count">{{scope.row.count}}</span>
              <el-button icon="el-icon-sort" circle @click="openPositionModal(scope.row)"></el-button>
              <el-button icon="el-icon-right" circle @click="openPage(`/catalogs/category/${scope.row.id}`)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <change-position-modal
            v-if="showPopupPosition"
            :showPopupPosition="showPopupPosition"
            :total="list.length"
            :position="moveCategory.count"
            @move="move"
            @close="closeChangePosition"
        />
      </div>
    </section>

    <toggle-status
        :dialogVisible="dialogStatusVisible"
        status="Показывать"
        text="выбранных категорий"
        @close="closeToggleStatus"
        @change-status="changeStatus"
    />
    <save-notification
        v-show="listRemoveCatalog.length"
        status
        :text="textNotification"
        @clear="clear"
        @change="change"
    />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>