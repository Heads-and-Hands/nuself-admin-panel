<template>
  <div class="main-wrapper">
    <router-view />
  </div>
</template>
<script>
import { EventBus } from '@/services/event-bus';

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