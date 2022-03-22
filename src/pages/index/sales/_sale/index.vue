<template>
  <div class="sale-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{ data.name }}
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col class="info" style="min-width: 533px">
                <div class="sub-title">Название</div>
                <el-input
                    class="inline-input"
                    v-model="data.name"
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <el-tag
                      :type="data.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ data.status }}</el-tag>
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
                <div class="sub-title">Срок действия</div>
                <el-date-picker
                    v-model="data.validity"
                    type="daterange"
                    align="right"
                    value-format="yyyy-MM-dd"
                    :start-placeholder="data.validity[0]"
                    :end-placeholder="data.validity[1]"
                >
                </el-date-picker>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Величина скидки</div>
                <el-input
                    class="inline-input"
                    v-model="data.sale"
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Тип субъекта</div>
                <el-select v-model="data.subjectType" :placeholder="data.subjectType">
                  <el-option
                      v-for="(item, index) in selectType"
                      :key="index"
                      :label="item.value"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </div>
            <div class="container-inputs">
            </div>
          </div>
          <div class="main-item">
            <span class="subtitle head-18-s">{{ data.subjectType }} <span class="limit">4</span></span>
            <el-table
                :data="data.relation"
                style="width: 100%; margin-top: 16px">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  v-if="data.subjectType === 'Бренд'"
                  prop="image"
                  label="Фото">
                <template slot-scope="scope">
                  <img :src="scope.row.image" class="image">
                </template>
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название"
                  width="280">
              </el-table-column>
              <el-table-column
                  v-if="data.subjectType === 'Подборка'"
                  prop="previewType"
                  label="Вид превью"
                  width="136">
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус"
              >
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  width="40"
                  fixed="right">
                <template slot="header">
                  <div style="text-align: right">
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                    ></el-button>
                  </div>
                </template>
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </div>
      <toggle-status
          :dialogVisible="dialogStatusVisible"
          :status="data.status"
          text="выбранной подборки"
          @close="dialogStatusVisible = false"
          @change-status="changeStatus"
      />
      <save-notification v-show="isSaveChange" remove change @remove="remove" @save="save" @clear="clear"/>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>