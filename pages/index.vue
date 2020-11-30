<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <BlogList :posts="posts" />
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue';

export default {
  components: { Promo },
  head() {
    const title = 'Nuxt Blog',
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
