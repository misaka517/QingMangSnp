import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';
import MyLogin from '../pages/MyLogin.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/login', component: MyLogin, name: 'Login' },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// 未登录则跳转登录页
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login') {
        next({name: 'Login'});
    }
    else {
        next();
    }
});

export default router;