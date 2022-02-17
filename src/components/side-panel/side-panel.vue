<template>
  <div class="side-menu-page">
    <perfect-scrollbar>
      <div class="side-logo">
        <img class="logo" src="@/assets/icons/logo.svg" />
      </div>
      <el-menu background-color="#292B33">
        <div v-for="(element, id) in navMenu" :key="id">
          <router-link :to="`/${element.path}`">
            <el-menu-item :disabled="element.disabled">
              <i :class="element.icon"></i>
              <span>{{ element.title }}</span>
            </el-menu-item>
          </router-link>
          <div v-if="element.line" class="line"></div>
        </div>
        <el-menu-item class="profile">
          <i class="el-icon-user-solid"></i>
          <span>Иван Иванов</span>
        </el-menu-item>
      </el-menu>
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss" src="./side-panel.scss"></style>
<script src="./side-panel.js"></script>
