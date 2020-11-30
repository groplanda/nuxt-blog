<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-content">
        <nuxt-link class="logo" to="/">NUXT BLOG</nuxt-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.title">
            <nuxt-link :to="link.url" :title="link.title" class="navbar-link">{{link.title}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'Blog', url: '/blog'},
        {title: 'About', url: '/about'},
      ],
    };
  },
};
</script>
<style lang="scss">
  .nuxt-link-exact-active {
    color:#4343aa;
  }
  a.logo {
    color: #444;
  }
</style>
