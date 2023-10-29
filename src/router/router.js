import { createRouter, createWebHistory } from 'vue-router';
import rApp from '../rApp.vue';
//../rApp.vue

const routes = [
  {
    path: '/',
    name: 'rApp', //home
    component: rApp,
  },
  // 다른 경로와 컴포넌트 설정
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


