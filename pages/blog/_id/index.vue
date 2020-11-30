<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <Comments :comments="comments" />
    <NewComment :postId="$route.params.id" />
  </div>
</template>

<script>
import Post from '@/components/blog/Post.vue';
import NewComment from '@/components/comments/NewComment.vue';
import Comments from '@/components/comments/Comments.vue';

export default {
    components: { Post, NewComment, Comments },
  head() {
    const title = this.post.title,
          descr = this.post.descr,
          type = 'article',
          img = this.post.img;
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },
      ]
    }
  },
  async asyncData(context) {
    const id = context.params.id,
      requestPost = fetch(`https://nuxt-blog-bdf09.firebaseio.com/posts/${id}.json`)
    .then(data => data.json()),
      requestComments = fetch(`https://nuxt-blog-bdf09.firebaseio.com/comments.json`)
    .then(data => data.json());

    return await Promise.all([
      requestPost,
      requestComments,
    ])
    .then(([post, comments]) => {

      let commentsResult = Object.values(comments).filter(comment => {
        return comment.published && comment.postId === id;
      });;

      return {
        post,
        comments: commentsResult
      }
    })
  },
}
</script>