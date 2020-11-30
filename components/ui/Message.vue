<template>
  <div class="message" :class="messageClass">
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    messageClass: {
      type: String,
      default: 'success'
    }
  }
}
</script>
<style lang="scss">
  .message {
    padding: 10px;
    background-color: #fff;
    border-radius: 30px;
    text-align: center;
    max-width: 400px;
    margin: auto;
    p {
      margin: 0;
      font-style: 16px;
    }
    &.success {
      color: #7bd782;
    }
    &.error {
      color: #b53f3f;
    }
  }
</style>