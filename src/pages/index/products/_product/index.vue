<template>
  <div class="category-page" v-if="!loading">
    <div class="page-header">
      <i class="el-icon-back" @click="back()"></i>
      {{ info.name }}
    </div>
    <div class="category-page-container">
      <div class="left-container content">
        <div class="nav-wrapper" ref="main">
          <Common :data="info" @openStatus="dialogStatusVisible = true" />
        </div>
        <div class="nav-wrapper" ref="about">
          <About :data="info" />
        </div>
        <div class="nav-wrapper" ref="colors">
          <Colors :products="info.colorVarieties" ref="colors"/>
        </div>
      </div>
      <right-side-bar v-if="navList.length" :list="navList" />
    </div>
    <toggle-status
      v-if="info"
      :dialogVisible="dialogStatusVisible"
      :status="info.status"
      type="active"
      text="выбранного промокода"
      @close="dialogStatusVisible = false"
      @change-status="changeStatus($event)"
    />
    <save-notification v-if="isSaveChange" remove :change="isSaveChange" @remove="remove" @save="save" @clear="clear"/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>