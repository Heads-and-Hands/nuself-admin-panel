<template>
  <ul class="right-sidebar">
    <li v-for="(row, index) in listexample" :key="index" class="item body-14-reg">
      <el-button circle class="index">{{ index }}</el-button>
      {{row.title}}
    </li>
  </ul>
</template>

<style lang="scss" src="./right-sidebar.scss"></style>
<script src="./right-sidebar.js"></script>