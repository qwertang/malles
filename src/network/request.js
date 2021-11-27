import axios from "axios";

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })

    //2.axios拦截器
    //1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);
    })

    //2.响应拦截
    axios.interceptors.request.use(res => {
        console.log(res)
        return res.data
    },err => {
        console.log(err)
    })

    //3发送真正的网络请求
    return instance(config)

        // instance(config)
        //     .then(res => {
        //         resolve(res)
        //     })
        //     .catch(err => {
        //         reject(err)
        //     })

}