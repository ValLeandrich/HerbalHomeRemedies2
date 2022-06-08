import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import ListOfHerbs from '../views/ListOfHerbs.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import Result from '../views/Result.vue'
import Akapulko from '../views/Akapulko.vue'
import YerbaBuena from '../views/Yerba_Buena.vue'
import Sambong from '../views/Sambong.vue'
import TsaangGubat from '../views/Tsaang_Gubat.vue'
import Niyugniyogan from '../views/Niyug_niyogan.vue'
import Bayabas from '../views/Bayabas.vue'
import UlasimangBato from '../views/Ulasimang_Bato.vue'
import Bawang from '../views/Bawang.vue'
import Ampalaya from '../views/Ampalaya.vue'


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
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/akapulko',
    name: 'Akapulko',
    component: Akapulko
  },
  {
    path: '/yerba_buena',
    name: 'Yerba Buena',
    component: YerbaBuena
  },
  {
    path: '/sambong',
    name: 'Sambong',
    component: Sambong
  },
  {
    path: '/tsaang_gubat',
    name: 'Tsaang Gubat',
    component: TsaangGubat
  },
  {
    path: '/niyug_niyogan',
    name: 'Niyug-niyogan',
    component: Niyugniyogan
  },
  {
    path: '/bayabas',
    name: 'Bayabas',
    component: Bayabas
  },
  {
    path: '/ulasimang_bato',
    name: 'Ulasimang Bato',
    component: UlasimangBato
  },
  {
    path: '/bawang',
    name: 'Bawang',
    component: Bawang
  },
  {
    path: '/ampalaya',
    name: 'Ampalaya',
    component: Ampalaya
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
