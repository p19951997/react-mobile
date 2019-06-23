import axios from 'axios'

// 同一请求的前缀
axios.defaults.baseURL='http://react.zbztb.cn/site/'

// axiios拦截器
// 发送前调用一个事件拦截器
// 发送回来调用一个事件拦截器
// 添加响应拦截器
axios.interceptors.response.use(function(response){

    // 发送什么数据 其他用了axios请求的返回值 就是什么数据
    return response.data;
},function(error){
    // 对响应错误做点什么
    return Promise.reject(error);
})

// 获取轮播图数据
export const getGoods=() => axios.get('goods/gettopdata/goods')