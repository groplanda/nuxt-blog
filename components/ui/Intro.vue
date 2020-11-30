<template>
  <div class="intro">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss">
  .intro {
    padding: 20px;
    text-align: center;
    color: #fff;
    background-color: #494ce8;
    h2 {
      color: #fff;
    }
  }
</style>