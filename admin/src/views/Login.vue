<template>
  <div>
    <el-card header="登陆" class="login-card">
      <el-form label-position="left" label-width="50px" @submit.native.prevent='login'>
        <el-form-item label="账号">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" native-type="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async login(){
      const res = await this.$http.post('login',this.model)
      localStorage.token = res.data.token

      this.$router.push('/')
      this.$message({
        type:'success',
        message:'登录成功'
      })
    }
  }
}
</script>

<style scoped>
.login-card{
  width: 25rem;
  margin: 10rem auto
}
</style>