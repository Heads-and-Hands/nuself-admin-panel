<template>
  <ul class="right-sidebar">
    <li
        v-for="(row, index) in list"
        :key="index"
        :class="['item body-14-reg', {select: selectItem === row.id}]"
        @click="scrollMeTo(row)"
    >
      <el-button circle class="index body-14-s" type="info" plain>{{ index + 1}}</el-button>
      <span class="text">{{row.title}}</span>
    </li>
  </ul>
</template>

<style lang="scss" src="./right-sidebar.scss"></style>
<script src="./right-sidebar.js"></script>