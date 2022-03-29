<template>
  <div class="common-wrapper">
    <section class="common" ref="main">
      <div class="head-24-s title">Основное</div>
      <div class="row-container">
        <div class="input-wrapper id">
          <div class="body-14-reg sub-title">ID</div>
          <el-input v-model="data.id" :value="data.id" clearable disabled />
        </div>
        <div class="input-wrapper vendor-code">
          <div class="body-14-reg sub-title">Артикул</div>
          <el-input
            v-model="data.vendorCode"
            :value="data.vendorCode"
            clearable
            disabled
          />
        </div>
        <div class="input-wrapper status">
          <div class="body-14-reg sub-title">Статус</div>
          <el-tag
            :type="data.status === 'Показывать' ? 'success' : 'warning'"
            class="body-14-reg status-tag"
          >
            {{ data.status }}
          </el-tag>
        </div>
        <div>
          <el-button
            icon="el-icon-edit"
            circle
            style="background-color: #292b33; color: white"
            @click="dialogStatusVisible = true"
          />
        </div>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Брэнд</div>
          <el-input
            v-model="data.brand"
            :value="data.brand"
            clearable
            disabled
          />
        </div>
        <el-button icon="el-icon-right" circle></el-button>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Базовое название (1С)</div>
          <el-input
            v-model="data.basicName"
            :value="data.basicName"
            clearable
            disabled
          />
        </div>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">
            Название на сайте и в приложении
          </div>
          <el-input v-model="data.name" :value="data.name" clearable />
        </div>
      </div>
      <div class="data-image">
        <div class="head-18-s">Галерея</div>
        <div v-if="data.image" class="image-container">
          <img class="image" :src="data.image" />
          <el-button
            type="danger"
            circle
            class="delete-image"
            size="mini"
            @click="data.image = ''"
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
            >Загрузить фото (файлы jpeg, png не больше 10 МБ. Разрешение 276px x
            376px.)</span
          >
        </el-upload>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Ссылка на видео</div>
          <el-input
            v-model="data.videoLink"
            :value="data.videoLink"
            clearable
          />
        </div>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Категория</div>
          <el-input
            v-model="data.category"
            :value="data.category"
            clearable
            disabled
          />
        </div>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Покатегория</div>
          <el-input
            v-model="data.subcategory"
            :value="data.subcategory"
            clearable
            disabled
          />
        </div>
      </div>
      <div class="row-container">
        <div class="input-wrapper">
          <div class="body-14-reg sub-title">Название цвета</div>
          <el-input
            v-model="data.color.title"
            :value="data.color.title"
            clearable
            disabled
          />
        </div>
      </div>
      {{ dialogStatusVisible }}
    </section>
  </div>
</template>
<script>
export default {
  name: "App",
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
};
</script>

<style lang="scss">
.main-wrapper {
  height: 100%;

  .common {
    background-color: #ffffff;
    width: 812px;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 48px;
    box-shadow: 0px 4px 12px rgba(40, 43, 52, 0.07);
    padding: 40px 48px 48px;

    .title {
      margin-bottom: 40px;
    }

    .row-container {
      display: flex;
      align-items: flex-end;
      margin-bottom: 24px;

      .input-wrapper {
        width: 100%;

        .sub-title {
          color: #919398;
          margin-bottom: 8px;
        }
      }

      .el-button {
        margin-left: 24px;
      }

      .vendor-code,
      .id {
        margin-right: 24px;
        width: 253px;
      }

      .status {
        width: 106px;

        .status-tag {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .data-image {
      margin-bottom: 24px;

      .head-18-s {
        margin-bottom: 24px;
      }

      .image-container {
        position: relative;

        img {
          border: 1px solid #dddfe5;
          box-sizing: border-box;
          border-radius: 4px;
          height: 250px;
          width: 716px;
          object-fit: cover;
        }

        .delete-image {
          width: 18px;
          height: 18px;
          line-height: 4px;
          font-weight: 300;
          text-align: center;
          padding: 3px !important;
          position: absolute;
          right: -8px;
          top: -8px;
          border: 2px solid #ffffff;
          box-sizing: border-box;

          span {
            display: block;
            width: 6px;
            height: 6px;
          }
        }
      }

      .upload-image .el-upload {
        width: 716px;
        height: 250px;
        border: 1px solid #dddfe5;
        border-radius: 4px;
        font-weight: 500;
        color: #919398;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          line-height: 40px;
        }
      }
    }
  }
}
</style>