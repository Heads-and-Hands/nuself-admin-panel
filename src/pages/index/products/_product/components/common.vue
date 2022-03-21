<template>
  <div class="common-wrapper">
    <section class="common" ref="main">
      <div class="head-24-s title">Основное</div>
      <div class="row-container">
        <div class="name">
          <div class="body-14-reg sub-title">Название категории</div>
          <el-input
            placeholder="Please input"
            v-model="data.name"
            :value="data.name"
            clearable
            :disabled="!data.isCustom"
          >
          </el-input>
        </div>
        <div class="id">
          <div class="body-14-reg sub-title">ID</div>
          <el-input v-model="data.id" :value="data.id" clearable disabled>
          </el-input>
        </div>
        <div class="status">
          <div class="body-14-reg sub-title">Статус</div>
          <el-tag
            :type="data.status === 'Показывать' ? 'success' : 'warning'"
            class="body-14-reg status-tag"
            >{{ data.status }}</el-tag
          >
        </div>
        <div>
          <el-button
            icon="el-icon-edit"
            circle
            style="background-color: #292b33; color: white"
            @click="dialogStatusVisible = true"
          ></el-button>
        </div>
      </div>
      <div class="data-image">
        <div class="head-18-s">Обложка</div>
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
      <div class="data-table">
        <div class="head-18-s">Размерная таблица по умолчанию</div>
        <el-table :data="tableSize" style="width: 716px; margin-top: 16px">
          <el-table-column prop="id" label="ID" width="44"> </el-table-column>
          <el-table-column prop="image" label="Фото" width="85">
            <template slot-scope="scope">
              <img :src="scope.row.image" class="image" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Название"> </el-table-column>
          <el-table-column width="40" fixed="right">
            <template slot="header">
              <div style="text-align: right">
                <el-button
                  icon="el-icon-edit"
                  circle
                  style="background-color: #292b33; color: white"
                ></el-button>
              </div>
            </template>
            <template>
              <el-button icon="el-icon-right" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
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

    .data-image {
      .image-container {
        position: relative;
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

    .title {
      margin-bottom: 40px;
    }

    .sub-title {
      color: #919398;
      margin-bottom: 8px;
    }

    .row-container {
      display: flex;
      align-items: flex-end;
      margin-bottom: 48px;

      .name,
      .id {
        margin-right: 24px;
      }
      .name {
        width: 222px;
      }
      .id {
        width: 188px;
      }
      .status {
        width: 106px;
        margin-right: 16px;

        .status-tag {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .data-image {
      .head-18-s {
        margin-bottom: 24px;
      }

      img {
        border: 1px solid #dddfe5;
        box-sizing: border-box;
        border-radius: 4px;
        height: 250px;
        width: 716px;
        object-fit: cover;
      }
    }

    .data-size {
      margin-top: 48px;
      .el-table td:first-child,
      .el-table td:last-child,
      .el-table th:first-child,
      .el-table th:last-child {
        .cell {
          padding: 0;
        }
      }

      .image {
        height: 53px;
        width: 44px;
        border-radius: 4px;
        object-fit: contain;
      }
    }
  }
}
</style>