<template>
  <div class="about-wrapper">
    <section class="about">
      <div class="head-24-s title">О товаре</div>
      <div class="row-container">
        <el-col class="textarea">
          <div class="sub-title">Описание</div>
          <el-input v-model="data.description" type="textarea" />
        </el-col>
      </div>
      <div class="row-container">
        <el-col class="textarea">
          <div class="sub-title">Размер и крой</div>
          <el-input v-model="data.cut" type="textarea" />
        </el-col>
      </div>
      <div class="row-container">
        <el-col class="textarea">
          <div class="sub-title">Состав и уход</div>
          <el-input v-model="data.compound" type="textarea" />
        </el-col>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.about-wrapper {
  height: 100%;

  .about {
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

    .row-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;

      .textarea {
        width: 100%;

        .sub-title {
          color: #919398;
          margin-bottom: 8px;
        }
      }

      .el-input.is-disabled .el-input__inner,
      .el-textarea.is-disabled .el-textarea__inner {
        color: #292b33;
      }

      .el-textarea.is-disabled .el-textarea__inner {
        height: 80px;
      }

      textarea {
        resize: none;
      }
    }
  }
}
</style>