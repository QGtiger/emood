import Cookie from 'js-cookie'
import config from '@/config'
const { cookieExpires } = config

export const TOKEN_KEY = 'token'
export const User_KEY = 'userinfo'

export const setToken = (token) => {
    Cookie.set(TOKEN_KEY, token, {expires: cookieExpires || 1})
    localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
    const token = Cookie.get(TOKEN_KEY)
    if(token) return token
    else return false
}

export const setUserInfo = (info) => {
    localStorage.setItem(User_KEY, info)
}