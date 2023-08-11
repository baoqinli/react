import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 创建axios实例
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // 在这里可以添加一些公共逻辑，比如设置请求头、添加token等
      console.log("进入请求拦截器")
      return config as InternalAxiosRequestConfig;
    },
    (error) => {
      // 处理请求错误
      return Promise.reject(error);
    }
  );

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里可以添加一些公共逻辑，比如处理响应数据、判断登录状态等
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default instance;