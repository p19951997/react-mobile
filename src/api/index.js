import axios from 'axios'

// 同一请求的前缀
axios.defaults.baseURL='http://react.zbztb.cn/site/'
// 获取轮播图数据
export const getGoods=() => axios.get('goods/gettopdata/goods')