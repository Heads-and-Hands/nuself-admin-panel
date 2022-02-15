<template>
  <div class="dashboard-page">
    <side-panel />
  </div>
</template>

<style>
.dashboard-page {
  height: 100%;
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