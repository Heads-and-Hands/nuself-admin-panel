<template>
  <div class="dashboard-page">
    <side-panel class="side-panel" />
    <router-view class="main-view" />
  </div>
</template>

<style lang="scss">
.dashboard-page {
  display: flex;
  height: 100%;

  .main-view {
    width: calc(100% - 256px);
    margin-left: 256px;
  }
}
</style>

<script>
import SidePanel from "@/components/side-panel/side-panel.vue";

export default {
  components: {
    SidePanel,
  },
};
</script>