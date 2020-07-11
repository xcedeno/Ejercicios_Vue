<template>
  <el-container>
    <el-header>
      <router-link to="/home">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      visible: false
    }
  },
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
