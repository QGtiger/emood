<template>
  <div class="hello">
    <Menu mode="horizontal" :theme="theme" active-name="1">
        <router-link :to="'#'">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                留言板
            </MenuItem>
        </router-link>
        <router-link :to="'#'">
            <MenuItem name="2">
                <Icon type="md-chatboxes" />
                聊天室
            </MenuItem>
        </router-link>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
                <router-link :to="'#'">
                    <MenuItem name="3-1">
                        <Icon type="logo-octocat" />
                        个人资料
                    </MenuItem>
                </router-link>
                <router-link :to="'#'">
                    <MenuItem name="3-2">
                        <Icon type="md-cart" />
                        emood中心
                    </MenuItem>
                </router-link>
                <router-link :to="'#'">
                    <MenuItem name="3-3">
                        <Icon type="ios-log-out" />
                        账号登出
                    </MenuItem>
                </router-link>
        </Submenu>
    </Menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'menu',

  data () {
    return {
      theme: 'dark',
      username: this.$store.state.userName
    }
  },
  computed: {
  },
  mounted () {
      console.log(this.username);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
