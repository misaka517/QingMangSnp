import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import Router from './router';
import Store from './store';
import axios from 'axios';


const app = createApp(App);
app.use(Router).use(Store);
app.config.globalProperties.$axios = axios;
app.mount('#app');
