<template>
  <div class="about">
    <!-- <BaseForm/> -->
    <h1>Posts</h1>
    <Posts/>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        {{post.title}}
      </li>
    </ul> -->
  </div>
</template>

<script>
// import postService from '@/services/postService.js'
import Posts from '@/components/Posts.vue';
export default {
  name: 'PostsView',
  components: {
    Posts
  }

  // created() {
  //   postService.get()
  //    .then(posts => this.posts = posts.data);
  // },
  // data() {
  //   return{
  //     posts: []
  //   }
  // }
}
</script>
