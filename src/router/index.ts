import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import ListOfHerbs from '../views/ListOfHerbs.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-of-herbs',
    name: 'ListOfHerbs',
    component: ListOfHerbs
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
