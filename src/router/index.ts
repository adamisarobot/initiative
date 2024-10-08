import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adam4ever',
      name: 'adam4ever',
      component: () => import('../views/AdminView.vue')
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
});

export default router;
