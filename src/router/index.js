import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // Login.vue 파일 경로
import Main from '../views/Main.vue';     // Main.vue 파일 경로

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  // 기본 경로 리다이렉션
  {
    path: '/',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
