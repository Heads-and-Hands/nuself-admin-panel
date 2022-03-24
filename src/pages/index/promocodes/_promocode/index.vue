<template>
  <div class="promo-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{data.name}}
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container">
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
                      :type="data.status === 'active' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ textStatus(data.status) }}</el-tag>
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
              <el-col>
                <div class="sub-title">Условие</div>
                <el-select v-model="data.conditions.type" :placeholder="data.conditions.type">
                  <el-option
                      v-for="(item, index) in selectType"
                      :key="index"
                      :label="item.title"
                      :value="item.type">
                  </el-option>
                </el-select>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Код промокода</div>
                <el-input
                    class="inline-input"
                    v-model="data.code"
                ></el-input>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Величина скидки на корзину</div>
                <el-input
                    class="inline-input"
                    v-model="data.sale"
                ></el-input>
              </el-col>
            </div>
            <div v-if="data.conditions[0].type === 'date'" class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Срок действия</div>
                <el-date-picker
                    v-model="dataPicker"
                    type="daterange"
                    align="left"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-col>
            </div>
          </div>
        </section>
      </div>
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
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>