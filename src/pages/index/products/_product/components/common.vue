<template>
  <div class="common-wrapper">
    <section class="common" ref="main">
      <div class="head-24-s title">Основное</div>
      <div class="data-container">
        <div class="name">
          <div class="body-14-reg sub-title">Название категории</div>
          <el-input
            placeholder="Please input"
            v-model="category.common.name"
            :value="category.common.name"
            clearable
            :disabled="!category.common.isCustom"
          >
          </el-input>
        </div>
        <div class="id">
          <div class="body-14-reg sub-title">ID</div>
          <el-input
            v-model="category.common.id"
            :value="category.common.id"
            clearable
            disabled
          >
          </el-input>
        </div>
        <div class="status">
          <div class="body-14-reg sub-title">Статус</div>
          <el-tag
            :type="
              category.common.status === 'Показывать' ? 'success' : 'warning'
            "
            class="body-14-reg status-tag"
            >{{ category.common.status }}</el-tag
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
        <div v-if="category.common.image" class="image-container">
          <img class="image" :src="category.common.image" />
          <el-button
            type="danger"
            circle
            class="delete-image"
            size="mini"
            @click="category.common.image = ''"
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
import { EventBus } from "@/services/event-bus";

export default {
  name: "App",
  created() {
    EventBus.$on("http-error", (e) => {
      const code = e.response.status;
      e = e.response;

      if (code === 401 && this.$route.name !== "auth") {
        this.$router.push({ name: "auth" });
      }
    });
  },
};
</script>

<style>
.main-wrapper {
  height: 100%;
}
</style>