<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册" :bordered="false">
        <div class="form-con">
          <register-form @register-valid="handleSubmit"></register-form>
          <p class="login-tip">
              <router-link :to="'login'">返回登录</router-link>
          </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/login-form/register-form'
import { mapActions } from 'vuex'
export default {
  components: {
    RegisterForm
  },
  methods: {
    ...mapActions([
      'handleRegister'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleRegister({userName, password}).then(res=>{
        this.$Message.success(res);
      }).catch(err=>{
        this.$Message.error(err);
      })
    }
  }
}
</script>

<style>

</style>
