<template>
  <div class="compilation-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{this.$route.params.id === 'create' ? 'Новая подобрка' : 'Подборка'}}
    </div>
    <div v-if="info" class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">ID</div>
                <el-input
                    class="inline-input"
                    :value="info.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Вид превью</div>
                <el-select v-model="info.previewType" :placeholder="info.previewType">
                  <el-option
                      v-for="(item, index) in selectType"
                      :key="index"
                      :label="item.title"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <status-btn
                    :status="info.status"
                    type="visibility"
                    edit
                    @openStatusModal="dialogStatusVisible = true"
                />
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="info">
                <div class="sub-title">Название</div>
                <el-input
                    class="inline-input"
                    v-model="info.name"
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Описание для сотрудников</div>
                <el-input
                    class="inline-input"
                    v-model="info.description"
                    type="textarea"
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section v-if="products" class="page-container products" ref="products">
          <div class="head-24-s title">
            Товары  <span class="limit">{{ products.list.length || 0 }}</span>
          </div>
          <div class="products-item body-14-reg">
            <table-products
                :data="products"
            />
          </div>
        </section>
      </div>
      <right-side-bar v-if="navList.length" :list="navList"/>
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
    <save-notification remove :change="isSaveChange" @remove="deleteCompilation" @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>