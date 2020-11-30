<template>
  <div class="wrapper-content wrapper-content--fixed">
    <BlogList :posts="posts" />
  </div>
</template>

<script>
export default {
  head() {
    const title = 'Nuxt Blog Page',
          descr = 'My Nuxt Blog',
          type = 'site';
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ]
    }
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
}
</script>