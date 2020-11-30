<template>
  <BlogList :posts="posts" :admin="true" />
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
}
</script>
