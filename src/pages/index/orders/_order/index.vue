<template>
  <div class="order-page">
    <div class="page-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Цвет
    </div>
    <section class="color-container">
      <div class="head-24-s title">
        Основное
      </div>
    </section>
    <save-notification v-show="isSaveChange" @clearAll="clearAll()" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>