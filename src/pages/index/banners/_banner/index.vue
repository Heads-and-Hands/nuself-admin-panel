<template>
  <div class="banner-page separate-page">
    <div class="banner-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{data.title}}
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="main page-container" ref="main">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="container-common">
            <div class="main-item body-14-reg">
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">ID</div>
                  <el-input
                      class="inline-input"
                      v-model="data.id"
                      disabled
                  ></el-input>
                </el-col>
                <el-col class="status-container">
                  <div class="body-14-reg sub-title">Статус</div>
                  <div class="status">
                    <el-tag
                        :type="data.status === 'Показывать' ? 'success' : 'warning'"
                        class="body-14-reg status-tag"
                    >{{ data.status}}</el-tag>
                    <el-button
                        icon="el-icon-edit"
                        circle
                        style="background-color: #292B33; color: white"
                        @click="dialogStatusVisible = true"
                    ></el-button>
                  </div>
                </el-col>
              </div>
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">Заголовок</div>
                  <el-input
                      class="inline-input"
                      v-model="data.title"
                  ></el-input>
                </el-col>
              </div>
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">Тип</div>
                  <el-select v-model="data.type" :placeholder="data.type">
                    <el-option
                        v-for="(item, index) in selectType"
                        :key="index"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col>
                  <div class="sub-title">Переход</div>
                  <el-select v-model="data.transition" :placeholder="data.transition">
                    <el-option
                        v-for="(item, index) in selectTransition"
                        :key="index"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </div>
              <div class="container-inputs">
                <div class="data-image-banner">
                  <div class="head-18-s">
                    Обложки
                  </div>
                  <div class="image-uploader">
                    <div class="horizontal">
                      <div v-if="imageUrl" class="image-container">
                        <img class="image" :src="imageUrl">
                        <el-button type="danger" circle class="delete-image" size="mini" @click="imageUrl = ''">&#215;</el-button>
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
                        <span class="body-12-reg">Загрузить фото</span>
                      </el-upload>
                    </div>
                    <div class="vertical">
                      <div v-if="imageUrl2" class="image-container">
                        <img class="image" :src="imageUrl2">
                        <el-button type="danger" circle class="delete-image" size="mini" @click="imageUrl2 = ''">&#215;</el-button>
                      </div>
                      <el-upload
                          v-else
                          action="#"
                          list-type="picture-card"
                          class="upload-image"
                          :limit="1"
                          :on-success="addImageTwo"
                          :before-upload="beforeImageUploadTwo"
                      >
                        <i slot="default" class="body-12-reg el-icon-camera"></i>
                        <span class="body-12-reg">Загрузить фото</span>
                      </el-upload>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="body-14-reg">
            <div class="head-18-s">
             {{data.transition || data.category || data.brand}}
            </div>
            <el-table
                :data="data.compilation"
                style="width: 100%; margin-top: 16px">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  v-if="data.transition === 'Дизайнер'"
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
                  v-if="data.transition === 'Подборка'"
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
    </div>

    <el-dialog
        title="Изменить статусы"
        :visible.sync="dialogStatusVisible"
        width="551px"
        custom-class="change-status-modal"
    >
      <span class="subtitle body-14-reg">Выберите статус, который вы хотите истановить для выбранной категории</span>
      <div class="radio-container">
        <el-radio v-model="changeStatus" label="Показывать" border>
          <el-tag type="success" class="body-14-reg">Показывать</el-tag>
        </el-radio>
        <el-radio v-model="changeStatus" label="Не показывать" border>
          <el-tag type="warning" class="body-14-reg">Не показывать</el-tag>
        </el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogStatusVisible = false">Применить</el-button>
        </span>
    </el-dialog>
    <save-notification remove :change="isChange" @remove="remove" @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>