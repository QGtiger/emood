<template>
  <Form ref="registerForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="repassword">
      <Input type="password" v-model="form.repassword" placeholder="请确认密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>注册</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
  },
  data () {
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入你的密码'));
        } else if (value.length < 6){
            callback(new Error('密码不能少于六位'));
        } else {
            if (this.form.repassword !== '') {
                // 对第二个密码框单独验证
                this.$refs.registerForm.validateField('repassword');
            }
            callback();
        }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请在一次输入密码!'));
        } else if (value !== this.form.password) {
            callback(new Error('请重新确认你的密码!'));
        } else {
            callback();
        }
    };
    return {
        form: {
        userName: '',
        password: '',
        repassword: ''
        },
        rules: {
            userName: this.userNameRules,
            password: [
                {validator: validatePass, trigger: 'blur'}
            ],
            repassword: [
                { validator: validatePassCheck, trigger: 'blur' }
            ]
        }
    }
  },
  computed: {
  },
  methods: {
    handleSubmit () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.$emit('register-valid', {
            userName: this.form.userName,
            password: this.form.password,
          })
        }
      })
    }
  }
}
</script>
