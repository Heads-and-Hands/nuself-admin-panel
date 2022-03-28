<template>
  <div class="category-page">
    <div class="page-header">
      <i class="el-icon-back" @click="goToBack"></i>
      {{ data.common.name }}
    </div>
    <div class="category-page-container">
      <div class="left-container content">
        <section class="main" ref="main">
          <div class="head-24-s title">Основное</div>
          <div class="data-info">
            <div class="data-container">
              <div class="name">
                <div class="body-14-reg sub-title">Название категории</div>
                <el-input
                    placeholder="Please input"
                    v-model="data.common.name"
                    :value="data.common.name"
                    clearable
                >
                </el-input>
              </div>
              <div class="id">
                <div class="body-14-reg sub-title">ID</div>
                <el-input
                    v-model="data.common.id"
                    :value="data.common.id"
                    clearable
                    disabled
                >
                </el-input>
              </div>
              <div class="status">
                <div class="body-14-reg sub-title">Статус</div>
                <status-btn
                    :status="data.common.status"
                    type="active"
                    edit
                    @openStatusModal="dialogStatusVisible = true"
                />
              </div>
            </div>
            <div class="data-container">
              <div class="size">
                <div class="body-14-reg sub-title">Размерная таблица по умолчанию</div>
                <el-select v-model="categoryDataApi.common.sizeTableType" :placeholder="categoryDataApi.common.sizeTableType">
                  <el-option
                      v-for="(item, index) in sizeSelectList"
                      :key="index"
                      :label="item.title"
                      :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="data-image">
            <div class="head-18-s">Обложка</div>
            <div v-if="data.common.image" class="image-container">
              <img class="image" :src="data.common.image" />
              <el-button
                type="danger"
                circle
                class="delete-image"
                size="mini"
                @click="data.common.image = ''"
                >&#215;</el-button
              >
            </div>
            <el-upload
              v-else
              action="#"
              list-type="picture-card"
              class="upload-image"
              :limit="1"
              :on-success="addImage"
              :before-upload="beforeImageUpload"
            >
              <i slot="default" class="body-12-reg el-icon-camera"></i>
              <span class="body-12-reg"
                >Загрузить фото (файлы jpeg, png не больше 10 МБ. Разрешение
                276px x 376px.)</span
              >
            </el-upload>
          </div>
        </section>
        <section class="product" ref="goods">
          <div class="head-24-s title">
            Товары <span class="limit"> 42</span>
          </div>
          <el-button class="btn-to-product">Перейти к товарам</el-button>
        </section>
      </div>
      <right-side-bar v-if="navList.length" :list="navList"  />
    </div>
    <toggle-status
      :dialogVisible="dialogStatusVisible"
      :status="data.common.status"
      text="выбранной категории"
      @close="dialogStatusVisible = false"
      @change-status="changeStatus"
    />
    <save-notification v-if="isChange" change @save="save" @clear="clear" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>