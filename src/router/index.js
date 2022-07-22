import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import AbmUser from '../views/AbmUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Posts/:id',
    name: 'Posts',
    props: true,
    component: Posts
  },
  {
    path: '/AltaUser',
    name: 'AltaUser',
    props: true,
    component: AbmUser
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
