import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Toolbar from 'primevue/toolbar';
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-card', Card)
    .component('pv-image', Image)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar);

app.mount('#app');
