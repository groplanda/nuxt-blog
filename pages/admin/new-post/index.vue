<template>
  <div class="new-post-page">
    <NewPostForm @addPost="addPost" />
  </div>
</template>
<script>
import NewPostForm from '@/components/admin/NewPostForm.vue'

export default {
  layout: 'admin',
  methods: {
    async addPost(post) {
      await this.$store.dispatch('addPost', post)
      .then(() => {
        this.$router.push('/admin/')
      })
    }
  },
  components: {NewPostForm},
}
</script>