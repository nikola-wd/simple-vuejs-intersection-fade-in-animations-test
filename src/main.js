const { createApp } = require('vue');
import App from './App.vue';
import Observable from './components/Observable.vue';

const app = createApp(App);
app.component('observable', Observable);

app.mount('#app');
