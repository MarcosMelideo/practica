import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostView from '@/views/PostView.vue';
import Post from '@/components/Post.vue';
// import router from './router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts', //10.35
      component: PostView
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: Post,
      meta: {
        auth: true,
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

const authUser = true;

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !authUser)
        next('/');
    else 
        next();
});

export default router; 