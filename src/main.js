import { createApp } from 'vue';
import { setupCalendar } from 'v-calendar';
import App from './App';
import router from './router';
import store from './store';

require('v-calendar/style.css');
require('@/styles/style.sass');

createApp(App)
  .use(setupCalendar, {})
  .use(store)
  .use(router)
  .mount('#App');
