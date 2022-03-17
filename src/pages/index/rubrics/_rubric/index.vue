<template>
  <div class="rubric-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Название рубрики
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col style="min-width: 469px">
                <div class="sub-title">ID</div>
                <el-input
                    v-model="data.common.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <el-tag
                      :type="data.common.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ data.common.status }}</el-tag>
                  <div>
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                        @click="dialogStatusVisible = true"
                    ></el-button>
                  </div>
                </div>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="info">
                <div class="sub-title">Название</div>
                <el-input
                    v-model="data.common.name"
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Описание для сотрудников</div>
                <el-input
                    v-model="data.common.descriptions"
                    type="textarea"
                ></el-input>
              </el-col>
            </div>
          </div>
          <div class="main-item">
            <span class="subtitle head-18-s">Подборки между материалами <span class="limit">4</span></span>
            <div class="body-14-reg">
              <el-table
                :data="data.common.compilations"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название"
                  width="280"
              >
              </el-table-column>
              <el-table-column
                  prop="previewType"
                  label="Вид превью"
                  width="136"
              >
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус"
                  width="203">
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  width="40">
                <template slot="header">
                  <div style="text-align: right">
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                    ></el-button>
                  </div>
                </template>
                <template>
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
            </div>
          </div>
        </section>
        <section class="page-container materials" ref="products">
          <div class="head-24-s title">
            Материалы  <span class="limit">{{ data.content }}</span>
          </div>
          <el-button>Перейти к материалам</el-button>
        </section>
      </div>
      <toggle-status
          :dialogVisible="dialogStatusVisible"
          :status="data.common.status"
          text="выбранной рубрики"
          @close="dialogStatusVisible = false"
          @change-status="changeStatus"
      />
      <save-notification remove :change="isChange" @remove="remove" @save="save" @clear="clear"/>
      <right-side-bar
          :list="navList"
          @scrollToBlock="scrollToBlock"/>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>