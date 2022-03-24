<template>
  <div class="user-page separate-page">
    <div class="title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Пользователь
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
                <div class="sub-title">ФИО</div>
                <el-input
                    v-model="data.name"
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">ID</div>
                <el-input
                    v-model="data.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Роль</div>
                <el-select v-model="data.role" :placeholder="data.role">
                  <el-option
                      v-for="(item, index) in selectType"
                      :key="index"
                      :label="item.title"
                      :value="item.type">
                  </el-option>
                </el-select>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <el-tag
                      :type="data.status === 'Активен' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ data.status }}</el-tag>
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
                <div class="sub-title">Email</div>
                <el-input
                    v-model="data.email"
                />
              </el-col>
              <el-col>
                <div class="sub-title">Пароль</div>
                <el-input
                    v-model="data.email"
                />
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