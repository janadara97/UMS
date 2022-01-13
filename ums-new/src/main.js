import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import VueGoogleCharts from 'vue-google-charts';
import { store } from './Store/index'




import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);



Vue.use(VueGoogleCharts);
Vue.use(VueRouter);


const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes

});




Vue.config.productionTip = false

new Vue({

  vuetify,
  store: store,

  render: h => h(App),

  icons: {
    iconfont: 'md' || 'fa'
  },
  router: router
}).$mount('#app')
