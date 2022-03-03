<template>
  <div class="size-page">
    <div class="page-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      {{size.name}}
    </div>
    <section class="color-container">
      <div class="head-24-s title">
        Основное
      </div>
      <div class="item">
        <div class="sub-title body-14-reg">ID</div>
        <el-input
            v-model="size.id"
            disabled>
        </el-input>
      </div>
      <div class="item">
        <div class="sub-title body-14-reg">Название таблицы</div>
        <el-input v-model="newName">
        </el-input>
      </div>
      <div class="item">
        <div v-if="size.image" class="data-image">
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
        </el-upload>
      </div>
      </div>
    </section>
    <saveNotification v-show="isSaveChange" @clearAll="clearAll()" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>