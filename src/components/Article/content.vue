<template>
  <div class="article-container">
    <h1 class="title">{{ articleDetail.title }}</h1>
    <div class="counts">
      <span class="views-count">阅读{{articleDetail.views}}</span>
      <span class="comments-count">评论{{articleDetail.commentNumber}}</span>
      <!-- <span class="likes-count">喜欢{{articleDetail.usefulNumber}}</span> -->
    </div>
    <div class="markdown-content" v-html="articleDetail.content"></div>
  </div>
</template>
<script>
export default {
  props:['articleDetail']
}
</script>
