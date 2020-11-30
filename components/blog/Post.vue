<template>
  <section class="post">
    <div class="container">
      <div class="post-header">
        <img :src="post.img" :alt="post.title" />
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.descr }}</p>
      </div>
      <div class="post-body" v-html="post.content">{{ post.content }}</div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    post:{
      type: Object,
      required: true,
    }
  }
}
</script>
<style lang="scss">
  .post {
    margin: 0 auto 40px;
    max-width: 900px;
    &-header {
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding: 20px;
      img {
        max-width: 340px;
        margin-bottom: 20px;
      }
      p {
        color: #777;
      }
    }
  }
</style>
