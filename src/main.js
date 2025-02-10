import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/base.css';
import './assets/main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);
app.use(router);
app.use(createPinia());

AOS.init({ duration: 1000, easing: 'ease-in-out' });

app.mount('#app');
