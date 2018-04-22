import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
// import { getCookie,signOut,isLogin } from '../utils/authService'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = false
Vue.http.options.credentials = false
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  request.headers = request.headers || {}
  //request.headers.set('Content-Type', 'application/x-www-form-urlencoded')
  // if (isLogin()) {
  //   request.headers.set('Authorization', 'Bearer '+ getCookie('token').replace(/(^\")|(\"$)/g, ''))
  // }
  next((response) => {
    // 这里可以对响应的结果进行处理
    // if (response.status === 401) {
    //   signOut()
    //   window.location.pathname = '/login'
    // }
  })
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}')
export const ArticleResource = Vue.resource(API_ROOT + 'article{/id}{/controller}')
export const TagResource = Vue.resource('https://api.it120.cc/blog/cms/category/list')
export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
export const CommentAddResource = Vue.resource('https://api.it120.cc/blog/comment/add')
export const CommentListResource = Vue.resource('https://api.it120.cc/blog/comment/list')
export const MobileResource = Vue.resource(API_ROOT + 'mobile{/id}')
export const SystemConfigResource = Vue.resource('https://api.it120.cc/blog/config/get-value')
export const ArticleListResource = Vue.resource('https://api.it120.cc/blog/cms/news/list')
export const ArticleDetailResource = Vue.resource('https://api.it120.cc/blog/cms/news/detail')
export const ArticlePreNextResource = Vue.resource('https://api.it120.cc/blog/cms/news/preNext')
