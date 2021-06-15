import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { router } from "./router";
import { store } from "./store";
import App from './App.vue';
import './index.css';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus).use(router).use(store);
app.mount('#app');
app.config.productionTip = false;
