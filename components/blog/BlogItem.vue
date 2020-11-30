<template>
  <nuxt-link :to="getLink" class="blog-item">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h4 class="title">{{ post.title }}</h4>
      <p>{{ post.descr }}</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    admin: {
      type: Boolean,
      default: false,
    },
    post: {
      type: Object,
      required: true
    },
  },
  computed: {
      getLink() {
        return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`;
      }
    },
}
</script>