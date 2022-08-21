import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomeView from '@/views/PostView.vue'
import router from './router'

Vue.use(VueRouter)

export default new router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/posts',
      component: PosttView
    }
  ]
});
