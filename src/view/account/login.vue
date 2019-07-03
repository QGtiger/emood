<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">
            <router-link :to="'register'">没有账号?去注册</router-link>
          </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login-form/login-form'
import request from '@/libs/request'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        // this.getUserInfo().then(res => {
        //   this.$router.push({
        //     name: this.$config.homeName
        //   })
        // })
        this.$store.commit('setUserName', {userName})
        this.$router.push('/')
        this.$Message.success(res);
      }).catch(err=>{
        this.$Message.error(err);
      })
      // request({
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   method: 'post',
      //   url: '/api/login',
      //   data: JSON.stringify({'username':userName,'password':password})
      //   }).then(res=>{
      //     console.log(res.data)
      //     let response = res.data
      //     if(response.code === 200){
      //       localStorage.setItem('token',res.data.token)
      //     }else{
      //       this.$Modal.error({
      //         title: '登录失败',
      //         content: response.msg
      //       })
      //     }
        
      //   })
    }
  }
}
</script>

<style>

</style>
