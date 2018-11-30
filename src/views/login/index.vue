<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
           class="demo-ruleForm formStyle">
    <h3 class="title">登录系统首页</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.userName" class="inputStyle" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="userPassword" v-model="ruleForm2.userPassword" class="inputStyle" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:20%;" class="buttonStyle" @click.native.prevent="handleSubmit2" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import sysApi from '../../api/user/index'

export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        userName: 'admin',
        userPassword: 'admin'
      },
      rules2: {
        userName: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        userPassword: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    async handleSubmit2 (ev) {
      this.$refs.ruleForm2.validate(async valid => {
        if (valid) {
          this.logining = true
          let data = await sysApi.login(this.ruleForm2)
          this.logining = false
          let msg = data.message
          let user = null
          if (data.message) {
            user = data.message
            this.$message({
              message: msg,
              type: 'success'
            })
          }
          sessionStorage.setItem('user', JSON.stringify(user))
          this.$router.push({path: '/'})
        } else {
          console.log('error submit!!')
          return false
        }
      }
      )
    }
  }
}

</script>

<style lang="scss" scoped>
  .inputStyle{
    width: 300px
  }
  .buttonStyle{
    width:5px;
  }
  .formStyle{
    text-align: center
  }
</style>
