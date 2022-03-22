<template>
  <div class="catalog-page table-page">
    <div class="head-32-s title">Каталог</div>
    <section v-if="listCustom.length">
      <div class="head-24-s">
        Кастомные категории
        <span class="limit"> {{ listCustom.length }}</span>
      </div>
      <div class="page-content">
        <el-table
            :data="listCustom"
            ref="listRemoveTable"
            style="width: 100%"
            row-key="id"
            :indent="0"
            @selection-change="handleSelectionChange"
            row-class-name="body-14-reg"
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
                <el-tag
                  :type="
                    scope.row.status === 'Показывать' ? 'success' : 'warning'
                  "
                  class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="200">
              <template slot="header">
                <el-button
                  icon="el-icon-plus"
                  circle
                  style="background-color: #292b33; color: white"
                  @click="openPage('/catalog/category/new-category')"
                  position-modal
                ></el-button>
              </template>
              <template slot-scope="scope">
                <span class="count">{{scope.row.count}}</span>
                <el-button icon="el-icon-sort" circle @click="showPopupPosition = true"></el-button>
                <el-button icon="el-icon-right" circle @click="openPage(`/catalog/category/${scope.row.id}`)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteCategory()"></el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </section>
    <section  v-if="list.length">
      <div class="head-24-s">
        Стандартные категории
        <span class="limit"> {{ list.length }}</span>
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
              <el-tag
                :type="
                  scope.row.status === 'Показывать' ? 'success' : 'warning'
                "
                class="body-14-reg status-tag"
                >{{ scope.row.status }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="" width="149">
            <template slot-scope="scope">
              <span class="count">{{scope.row.count}}</span>
              <el-button icon="el-icon-sort" circle @click="openPositionModal(scope.row)"></el-button>
              <el-button icon="el-icon-right" circle @click="openPage(`/catalog/category/${scope.row.id}`)"></el-button>
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