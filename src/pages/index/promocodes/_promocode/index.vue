<template>
  <div class="promo-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{info? info.name : ''}}
    </div>
    <div v-if="info" class="separate-page-container">
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
                    v-model="info.name"
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <status-btn
                    class="status-container"
                    :status="info.status"
                    type="active"
                    edit
                    @openStatusModal="dialogStatusVisible = true"
                />
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col v-if="info.conditions">
                <div class="sub-title">Условие</div>
                <el-select
                    v-model="info.conditions[0].type"
                    :placeholder="info.conditions[0].type"
                    @change="changeConditions($event)">
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
                    v-model="info.code"
                ></el-input>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Величина скидки на корзину</div>
                <el-input
                    class="inline-input sale-input"
                    :value="info.sale + '%'"
                    @input="changeSale"
                >
                </el-input>
              </el-col>
            </div>
            <div v-if="info.conditions[0].type === 'date'" class="container-inputs">
              <el-col v-if="info.conditions[0].params" class="date-picker">
                <div class="sub-title">Начало действия скидки</div>
                <el-date-picker
                    v-model="info.conditions[0].params.startDate"
                    type="date"
                    @change="isSaveChange = true"
                    value-format="yyyy-MM-dd"
                    placeholder="Начало"
                    >
                </el-date-picker>
              </el-col>
              <el-col  v-if="info.conditions[0].params" class="date-picker">
                <div class="sub-title">Конец действия скидки</div>
                <el-date-picker
                    v-model="info.conditions[0].params.endDate"
                    type="date"
                    @change="isSaveChange = true"
                    value-format="yyyy-MM-dd"
                    placeholder="Окончание">
                </el-date-picker>
              </el-col>
            </div>
          </div>
        </section>
      </div>
    </div>
    <toggle-status
        v-if="info"
        :dialogVisible="dialogStatusVisible"
        :status="info.status"
        type="active"
        text="выбранной подборки"
        @close="dialogStatusVisible = false"
        @change-status="changeStatus"
    />
    <save-notification remove :change="isSaveChange" @remove="remove" @save="save"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>