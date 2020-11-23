<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <h1>Login</h1>
      </el-col>
      <el-col :span="24">
        <el-form status-icon label-width="120px" class="demo-ruleForm">
          <el-form-item label="Correo" prop="correo">
            <el-input type="email" v-model="correo"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="passA" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Submit</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
      </el-col>
      </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      passA: '',
      correo: '',
    }
  },
}
</script>
