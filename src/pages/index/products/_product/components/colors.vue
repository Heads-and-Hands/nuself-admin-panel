<template>
  <div class="colors-wrapper">
    <section class="products">
      <div class="head-24-s title">
        Цветовые разновидности <span class="limit">{{ products.length }}</span>
      </div>
      <div class="products-item body-14-reg">
        <table-products :data="{ list: products }" />
      </div>
    </section>
  </div>
</template>

<script>
import tableProducts from "@/components/table-products/table-products.vue";

export default {
  props: ["products"],
  components: {
    tableProducts,
  },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style lang="scss">
.colors-wrapper {
  height: 100%;

  .products {
    background-color: #ffffff;
    width: 812px;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 48px;
    box-shadow: 0px 4px 12px rgba(40, 43, 52, 0.07);
    padding: 40px 48px 48px;

    .title {
      margin-bottom: 40px;
    }
  }
}
</style>