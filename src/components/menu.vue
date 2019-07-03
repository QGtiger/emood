<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleClick">
        <router-link :to="'/home'">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                留言板
            </MenuItem>
        </router-link>
        <Submenu name="3">
            <template slot="title">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                {{username.userName}}
            </template>
            <MenuGroup title="使用">
                <router-link :to="'#'">
                    <MenuItem name="3-1">
                        <Icon type="logo-octocat" />
                        个人资料
                    </MenuItem>
                </router-link>
                <router-link :to="'/cart'">
                    <MenuItem name="3-2">
                        <Icon type="md-cart" />
                        emood中心
                    </MenuItem>
                </router-link>
                    <MenuItem name="logout">
                        <Icon type="ios-log-out" />
                        账号登出
                    </MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>
<script>
import { mapState } from 'vuex'
    export default {
        data () {
            return {
                theme1: 'light',
            }
        },
        mounted () {
        },
        computed: {
            username () {
                return this.$store.state.user.userName
            }
        },
        methods: {
            logout () {
                localStorage.clear()
                this.$router.push('/login')
            },
            handleClick (name) {
                switch (name) {
                    case 'logout' : this.logout()
                }
            }
        }
    }
</script>
