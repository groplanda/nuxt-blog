<template>
  <div class="new-post-page">
    <NewPostForm @addPost="edtPost" :editPost="post" />
  </div>
</template>
<script>
import NewPostForm from '@/components/admin/NewPostForm.vue'

export default {
  layout: 'admin',
  data() {
    return {}
  },
  async asyncData(context) {
    const id = context.params.postId;
    try {
      let response = await fetch(`https://nuxt-blog-bdf09.firebaseio.com/posts/${id}.json`);
      let data = await response.json();
      return {
        post: { ...data, id }
      }
    } catch(e) {
      context.error(e);
    }
  },
  methods: {
    async edtPost(post) {
      await this.$store.dispatch('editPost', post)
      .then(() => {
        this.$router.push('/admin/')
      });
    }
  },
  components: {NewPostForm},
}
</script>