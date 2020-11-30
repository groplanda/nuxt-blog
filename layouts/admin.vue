<template>
  <no-ssr>
    <div class="wrapper">
      <div class="wrapper-content">
      <Intro title="Admin panel">
        <nuxt-link class="link linkWhite" to="/admin">Главная</nuxt-link>
        <nuxt-link class="link linkWhite" to="/admin/new-post">Добавить запись</nuxt-link>
        <nuxt-link class="link linkWhite" to="/admin/comments">Комментарии</nuxt-link>
        <span class="link linkWhite" @click="onLogout">Выйти</span>
      </Intro>
      <Nuxt />
      </div>
    </div>
  </no-ssr>
</template>
<script>
export default {
  middleware: ['auth'],
  methods: {
    onLogout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/admin/auth');
    }
  }
}
</script>
<style>

</style>