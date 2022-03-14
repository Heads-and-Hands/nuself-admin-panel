<template>
  <div class="dashboard-page">
    <side-panel class="side-panel" />
    <perfect-scrollbar class="main-ps">
      <router-view class="main-view" />
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss">
.dashboard-page {
  display: flex;
  height: 100%;

  .main-ps {
    height: 100%;
    width: calc(100% - 256px);
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