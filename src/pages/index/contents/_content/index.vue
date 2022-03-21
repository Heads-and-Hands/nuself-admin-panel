<template>
  <div class="content-page separate-page">
    <div class="content-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{data.title}}
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="main page-container" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="container-common">
            <div class="main-item body-14-reg">
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">ID</div>
                  <el-input
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
                  <div class="sub-title">Рубрика</div>
                  <el-select v-model="data.rubric" :placeholder="data.rubric">
                    <el-option
                        v-for="(item, index) in selectRubric"
                        :key="index"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
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
              </div>
              <div class="container-inputs">
                <el-col>
                  <div class="sub-title">Заголовок</div>
                  <el-input
                      v-model="data.title"
                  ></el-input>
                </el-col>
              </div>
              <template v-if="data.type === 'Событие'">
                <div class="container-inputs">
                  <el-col>
                    <div class="sub-title">Дата</div>
                    <el-date-picker
                        v-model="data.forEvent.date"
                        type="datetime"
                        prefix-icon="el-icon-date"
                    >
                    </el-date-picker>
                  </el-col>
                  <el-col>
                    <div class="sub-title">Место</div>
                    <el-input
                        v-model="data.forEvent.place"
                    ></el-input>
                  </el-col>
                </div>
                <div class="container-inputs">
                  <el-col>
                    <div class="sub-title">Ссылка на покупку</div>
                    <el-input
                        v-model="data.forEvent.link"
                    ></el-input>
                  </el-col>
                </div>
              </template>
              <template v-if="data.type === 'Видео'">
                <div class="container-inputs">
                  <el-input
                      v-model="data.forVideo"
                  ></el-input>
                </div>
              </template>
              <div class="container-inputs">
                <div class="data-image-content">
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
        </section>
        <section v-if="data.type !== 'Видео'" class="page-container" ref="article">
          <div class="head-24-s title">
            {{data.type === 'Статья'? data.type : 'Описание'}}
          </div>
          <div class="container-article">
            <div v-for="(item, index) in data.article" :key="index" class="content-block" :class="item.type">
              <el-button
                  class="btn-delete"
                  icon="el-icon-close"
                  type="danger"
                  circle
              ></el-button>
              <el-col v-if="item.type === 'annotation'" class="textarea">
                <div class="sub-header head-18-s">Аннотация</div>
                <el-input
                    class="inline-input body-14-s"
                    v-model="item.value"
                    type="textarea"
                ></el-input>
              </el-col>
              <el-col v-if="item.type === 'text'">
                <el-input
                    class="inline-input body-14-s"
                    v-model="item.value"
                    autosize
                    type="textarea"
                ></el-input>
              </el-col>
              <el-col v-if="item.type === 'image'">
                <el-image
                    v-if="item.value"
                    :src="item.value"
                    fit="cover"
                    :preview-src-list="[item.value]">
                </el-image>
                <el-upload
                    v-else
                    action="#"
                    list-type="picture-card"
                    class="upload-image"
                    :limit="1"
                    @click.native="addPhoto(index)"
                    :before-upload="addImageBlock"
                >
                  <i slot="default" class="body-12-reg el-icon-camera"></i>
                  <span class="body-12-reg">Загрузить фото (файлы jpeg, png не больше 10 МБ. Разрешение 276px x 376px.)</span>
                </el-upload>
              </el-col>
              <el-col v-if="item.type === 'carousel'">
                <div class="sub-header head-18-s">Карусель товаров  <span class="limit"> 3</span></div>
                тут таблица товаров
              </el-col>
              <el-col v-if="item.type === 'video'">
                <div class="sub-header head-18-s">Видео</div>
                <el-input

                    v-model="item.value"
                ></el-input>
              </el-col>
              <el-col v-if="item.type === 'tile'">
                <div class="sub-header head-18-s">Плитка товаров <span class="limit"> 3</span></div>
                и тут таблица товаров
              </el-col>
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
        <template v-if="data.type == 'Статья'">
          <section class="page-container" ref="products">
            <div class="head-24-s title">
              Товары из статьи <span class="limit"> 4</span>

            </div>
            И здесь тоже таблица товаров
          </section>
          <section class="page-container"ref="similar">
            <div class="head-24-s title">
              Похожие статьи <span class="limit"> 3</span>
            </div>
            И тут таблица товаров
          </section>
        </template>
      </div>
      <right-side-bar
          v-if="navList.length"
          :list="navList"
          @scrollToBlock="scrollToBlock"/>
    </div>
    <select-block-modal
        v-if="dialogArticleVisible"
        :dialogVisible="dialogArticleVisible"
        :content="articleList"
        @close="dialogArticleVisible = false"
        @create-new-block="createNewBlock"
     />
    <toggle-status
        :dialogVisible="dialogStatusVisible"
        :status="data.status"
        text="выбранного баннера"
        @close="dialogStatusVisible = false"
        @change-status="changeStatus"
    />
    <save-notification remove :change="isChange" @remove="remove" @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>