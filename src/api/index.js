import {UserResource,AuthResource,ArticleResource,TagResource,MobileResource,CommentResource, SystemConfigResource, ArticleListResource, ArticleDetailResource, ArticlePreNextResource, CommentAddResource, CommentListResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id:'local'},data)
  },
  getSnsLogins: function () {
    return UserResource.get({id:'snsLogins'})
  },
  getMe: function () {
    return UserResource.get({id:'me'})
  },
  mdUser: function (data) {
    return UserResource.update({id:'mdUser'},data)
  },
  getTagList:function () {
    return TagResource.get()
  },
  getApps:function () {
    return MobileResource.get({id: 'getApps'})
  },
  //article
  getIndexImage:function () {
    return ArticleResource.get({id:'getIndexImage'})
  },
  getFrontArticleList:function (options) {
    return ArticleResource.get({id: 'getFrontArticleList', ...options})
  },
  getFrontArticleCount:function () {
    return ArticleResource.get({id: 'getFrontArticleCount'})
  },
  getFrontArticle:function (id) {
    return ArticleResource.get({id: id, controller: 'getFrontArticle'})
  },
  toggleLike:function (id) {
    return ArticleResource.update({id:id,controller:'toggleLike'},{})
  },
  getPrenext:function (id,options) {
    return ArticleResource.get({id:id,controller: 'getPrenext', ...options})
  },
  //comment
  getFrontCommentList:function (id) {
    return CommentResource.get({id:id,controller: 'getFrontCommentList'})
  },
  getCommentList:function (id) {
    return CommentListResource.get({pageSize:65535, refId:id, type:3})
  },
  addNewComment:function (data) {
    return CommentAddResource.save(data)
  },
  addNewReply: function (id,data) {
    return CommentResource.save({id:id, controller:'addNewReply'},data)
  },
  delComment:function (id) {
    return CommentResource.remove({id:id})
  },
  delReply: function (id,data) {
    return CommentResource.update({id:id, controller:'delReply'},data)
  },
  getSystemConfig: function (key) {
    return SystemConfigResource.get({key:key})
  },
  getArticleList: function (options) {
    return ArticleListResource.get({page:options.currentPage, pageSize:options.itemsPerPage, categoryId:options.tagId, orderBy:options.sortName})
  },
  getArticleDetail: function (id) {
    return ArticleDetailResource.get({id:id})
  },
  getArticlePreNext: function (id) {
    return ArticlePreNextResource.get({id:id})
  }
}
