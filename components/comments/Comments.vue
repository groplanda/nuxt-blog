<template>
  <section class="comments">
    <div class="container">
      <h2 class="title">Коммментарии</h2>
      <p v-if="comments.length === 0">Комментариев пока нет...</p>
      <div
        v-else
        class="comment"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  },
}
</script>
<style lang="scss">
.comments {
  .title {
    text-align: center;
    & + p {
      text-align: center;
    }
  }
  .comment {
    border-radius: 25px;
    background-color: #fff;
    margin: 0 auto 20px;
    padding: 20px;
    max-width: 600px;
    .name {
      font-style: 20px;
      margin-bottom: 10px;
      color: #494ce8;
    }
    .text {
      color: #777;
    }
  }
}
</style>