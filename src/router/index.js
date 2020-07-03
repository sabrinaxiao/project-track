import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Team from '../views/Team.vue'
import Chat from '../views/Chat.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
