<template>
<!--   выделить три типа таблиц в перебор-->
  <div class="main-page separate-page">
    <div class="content-title head-32-s">
      Главная страница
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container">
          <div class="container-article">
            <div v-for="(item, index) in data" :key="index" class="content-block" :class="item.type">
              <div class="sub-header head-18-s">{{ tableName(item) }} <span class="limit"> 3</span></div>
              <el-table
                  v-if="item.type === 'carousel' || item.type === 'tile' || item.type === 'products'"
                  :data="item.value"
                  max-height="552"
                  style="width: 100%; margin-top: 16px">
                <el-table-column
                    prop="id"
                    label="ID"
                    width="40">
                </el-table-column>
                <el-table-column
                    prop="image"
                    label="Фото"
                    width="170">
                  <template slot-scope="scope">
                    <img :src="scope.row.image" class="image-horizontal" />
                  </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Заголовок баннера"
                    width="263">
                </el-table-column>
                <el-table-column prop="status" label="Статус" width="126">
                  <template slot-scope="scope">
                    <el-tag
                        :type="
                        scope.row.status === 'Показывать'
                          ? 'success'
                          : 'warning'
                      "
                        class="body-14-reg status-tag"
                    >{{ scope.row.status }}</el-tag
                    >
                  </template>
                </el-table-column>
                <el-table-column
                    width="110"
                    fixed="right">
                  <template slot="header">
                    <div style="text-align: right">
                      <el-button
                          icon="el-icon-edit"
                          circle
                          style="background-color: #292B33; color: white"
                          @click="dialogTablesVisible = true"
                      ></el-button>
                      <el-button
                          icon="el-icon-close"
                          circle
                          type="danger"
                          @click="dialogTablesVisible = true"
                      ></el-button>
                    </div>
                  </template>
                  <template slot-scope="scope">
                    <el-button icon="el-icon-right" circle></el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button
                  class="btn-plus"
                  icon="el-icon-plus"
                  circle
                  style="background-color: #292B33; color: white"
                  @click="openSelectBlockModal(index)"
              ></el-button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <select-block-modal
        v-if="dialogArticleVisible"
        :dialogVisible="dialogArticleVisible"
        :content="articleList"
        @close="dialogArticleVisible = false"
        @create-new-block="createNewBlock"
    />
    <save-notification v-if="isChange" change @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>