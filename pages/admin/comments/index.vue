<template>
  <div class="new-post-page">
    <CommentTable :thead="['Имя', 'Текст', 'Статус', 'Изменить', 'Удалить']">
      <tbody slot="tbody">
        <tr
        v-for="comment in comments"
        :key="comment.id"
        >
          <td>{{ comment.name }}</td>
          <td>{{ comment.text }}</td>
          <td>
            <span v-if="comment.published" class="status true"> Опубликован </span>
            <span v-else class="status false"> Скрыт </span>
          </td>
          <td @click="changeComment(comment)">Изменить</td>
          <td @click="deleteComment(comment.id)">Удалить</td>
        </tr>
      </tbody>
    </CommentTable>
  </div>
</template>
<script>
import CommentTable from '@/components/admin/CommentTable.vue'

export default {
  layout: 'admin',
  data() {
    return {
      comments: []
    }
  },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      let response = await fetch(`https://nuxt-blog-bdf09.firebaseio.com/comments.json`);
      let data = await response.json();
      let commentsList = [];
      for(let key in data) {
        commentsList.push({...data[key], id: key});
      }
      this.comments = commentsList;
    },
    async changeComment(data) {
      data.published = !data.published
      let response = await fetch(`https://nuxt-blog-bdf09.firebaseio.com/comments/${data.id}.json`, {
        method: 'put',
        body: JSON.stringify({
          name: data.name,
          postId: data.postId,
          published: data.published,
          text: data.text
        }),
      })
      .then(() => {
        this.getComments();
      });

    },
    async deleteComment(id) {
      return await fetch(`https://nuxt-blog-bdf09.firebaseio.com/comments/${id}.json`, {
        method: 'delete',
      })
      .then(() => {
        this.getComments();
      });
    }
  },
  components: {CommentTable},
}
</script>