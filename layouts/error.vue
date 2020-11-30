<template>
  <div class="not-found">
    <div class="container">
      <h1 class="title">Page not found</h1>
      <nuxt-link to="/">Go to homepage</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    text-align: center;
  }
</style>