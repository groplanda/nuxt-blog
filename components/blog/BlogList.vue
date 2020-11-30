<template>
  <section class="blog-list">
    <div class="blog__wrapper">
      <BlogItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :admin="admin"
      />
    </div>
  </section>
</template>
<script>
import BlogItem from '@/components/blog/BlogItem.vue'

export default {
  props: {
    admin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true,
    }
  },
  components: { BlogItem }
}
</script>
<style lang="scss">
  .blog__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    .blog-item {
      width: calc(33% - 30px);
      margin: 0 15px 30px;
      box-shadow: 0px 2px 10px 3px rgba(0,0,0,.4);
      .post-content {
        background-color: #fff;
        padding: 20px;
      }
    }
  }
</style>