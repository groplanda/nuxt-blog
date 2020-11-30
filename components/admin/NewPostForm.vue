<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <!--name-->
        <AppInput v-model="post.title"> Имя </AppInput>
        <AppInput v-model="post.img"> Url картинки </AppInput>
        <AppTextarea v-model="post.descr"> Описание </AppTextarea>
        <vue-editor v-model="post.content"></vue-editor>
        <div class="controls flex">
          <AppButton btnClass="btnDefaul" @click="cancel">Назад</AppButton>
          <AppButton @click="addPost">Сохранить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: { VueEditor },
  props: {
    editPost: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      post: this.editPost ? {...this.editPost} : {
        title: '',
        img: '',
        descr: '',
        content: '',
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push('/admin/')
    },
    addPost() {
      this.$emit('addPost', this.post)
    }
  }
}
</script>
<style lang="scss">
  .new-post {
    max-width: 600px;
    margin: 40px auto;
    .controls {
      margin-top: 20px;
      &.flex {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>