import { createRouter, createWebHistory } from 'vue-router';
import MyLogin from '../components/MyLogin.vue';

const routes = [
    {path: '/', component: null},
    {path: '/login', component: MyLogin, name: 'Login'},
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login') next({ name: 'Login' })
    else next()
})

export { router };