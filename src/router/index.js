import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SkillsPage from '../views/SkillsPage.vue'
import WorksPage from '../views/WorksPage.vue'
import ContactPage from '../views/ContactPage.vue'
import SubmitPage from '../views/SubmitPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsPage
  },
  {
    path: '/works',
    name: 'works',
    component: WorksPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/submit',
    name: 'submit',
    component:SubmitPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
