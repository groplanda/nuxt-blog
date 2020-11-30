<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Добавить комментарий</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit">
        <!--name-->
        <AppInput v-model="comment.name"> Имя </AppInput>
        <AppTextarea v-model="comment.text"> Текст </AppTextarea>
        <div class="controls">
          <AppButton>Добавить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>
<script>

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      },
      message: null,
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('addComment', {
          postId: this.postId,
          published: false,
          ...this.comment
        })
        this.comment.name = '';
        this.comment.text = '';
        this.message = 'Успешно добавлен!';
      } catch(e) {
        console.log(e);
      }
    }
  },
}
</script>
<style lang="scss">
  .new-comment {
    text-align: center;
    padding: 40px 0;
    form {
      max-width: 500px;
      margin: auto;
      .controls {
        margin-top: 20px;
      }
    }
  }
</style>