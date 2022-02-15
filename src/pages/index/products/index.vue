<template>
  <div class="auth-page">
    <div class="login-container">
      <img class="logo" src="@/assets/icons/logo.svg" />
      <el-form
        class="form-login"
        autocomplete="off"
        :rules="rules"
        :model="form"
        @submit.prevent.native="login"
      >
        <el-form-item prop="login">
          <el-input v-model="form.login" name="login" placeholder="Логин" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            name="password"
            placeholder="Пароль"
            show-password
          />
        </el-form-item>

        <el-button type="info" :loading="loading" native-type="submit">
          Войти
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>