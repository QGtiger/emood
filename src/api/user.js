import request from '@/libs/request'

export const login = (username, password) => {
    const data = {
        'username': username,
        'password': password
    }
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/api/login',
        method: 'post',
        data: JSON.stringify(data)
    })
}

export const register = (username, password) => {
    const data = {
        username,
        password
    }
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/api/register',
        method: 'post',
        data: JSON.stringify(data)
    })
}

export const getUserInfo = ()=>{
    return request({
        url: 'api/userInfo',
        method: 'get'
    })
}

export const getMessageList = (page)=>{
    return request({
        url: `api/message/list/${page}`,
        method: 'get'
    })
}

export const postMessage = (content)=>{
    
    var data = new FormData()
    data.append('content',content)
    return request({
        url: 'api/message/add',
        method: 'post',
        data: data
    })
}


export const getGoods = ()=>{
    return request({
        url: 'api/shop/list',
        method: 'get'
    })
}

export const getGood = ()=> {
    return request({
        url: 'api/order/goodsId/1',
        method: 'get'
    })
}

export const getResult = (uuid)=> {
    return request({
        url: `api/order/result/${uuid}`,
        method: 'get'
    })
}