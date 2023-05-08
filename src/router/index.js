import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',      
      component: () => import('/src/views/NewsView.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('/src/views/GamesView.vue')
    },
    {
      path: '/investors',
      name: 'investors',
      component: () => import('/src/views/InvestorsView.vue')
    },
    {
      path: '/press',
      name: 'press',
      component: () => import('/src/views/PressView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('/src/views/ContactsView.vue')
    },
  ]
})

export default router
