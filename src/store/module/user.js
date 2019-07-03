import {
    login,
    register,
    getUserInfo,
    getMessageList
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
    state: {
        userName: '',
        userId: '',
        token: getToken(),
        isVip: false,
        avatorImgPath: ''
    },
    mutations: {
        setAvator (state, avatorImgPath){
            state.avatorImgPath = avatorImgPath
        },
        setUserId (state, id){
            state.userId = id
        },
        setUserName (state, name){
            state.userName = name
        },
        setToken (state, token){
            state.token = token
            setToken(token)
        },
        setIsVip (state, isvip){
            state.isVip = isvip
        }
    },
    getters: {

    },
    actions: {
        // 登录
        handleLogin ({ commit }, {userName, password}){
            userName = userName.trim()
            return new Promise((resolve, reject)=>{
                login(userName,password).then(res=>{
                    const data = res.data
                    console.log(data)
                    if(data.code===200){
                        commit('setIsVip', data.data.isVip)
                        commit('setToken', data.data.token)
                        let name = userName
                        if(data.data.isVip) name+=' 会员'
                        resolve(`${name}, 登陆成功`)
                    }
                }).catch(err => {
                    reject(err)
                })
                // commit('setToken', 'data.token')
                // resolve('666')
            })
        },
        // 注册
        handleRegister ({ commit }, {userName, password}){
            return new Promise((resolve, reject)=>{
                register(userName, password).then(res=>{
                    const data = res.data
                    console.log(data)
                    if(data.code===200){
                        resolve(data.msg)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        // 获取用户信息
        getUserInfo ({ state, commit }) {
            return new Promise((resolve, reject)=>{
                try {
                    getUserInfo().then(res=>{
                        const data = res.data
                        commit('setAvator', data.avator)
                        commit('setUserName', data.name)
                        commit('setUserId', data.user_id)
                        commit('setIsVip', data.is_vip)
                        resolve(data)
                    }).catch(err=>{
                        reject(err)
                    })
                } catch (error){
                    reject(error)
                }
            })
        },
        // 用户登出
        handleLogout ({ state, commit }){
            return new Promise((resolve, reject)=>{
                commit('setToken', '')
                resolve('账号已成功退出...')
            })
        },
        handleMessageList (page) {
            return new Promise((resolve, reject)=>{
                getMessageList(page).then(res=>{
                    msglist = res.data.data.msglist
                    console.log(msglist)
                    resolve(msglist)
                })
            })
        }
    }
}