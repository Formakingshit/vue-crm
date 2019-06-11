import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from './utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyDq7P5KGEZn_NvEuEl40I-39owUB2pEa98",
  authDomain: "vue-crm-4fbb4.firebaseapp.com",
  databaseURL: "https://vue-crm-4fbb4.firebaseio.com",
  projectId: "vue-crm-4fbb4",
  storageBucket: "vue-crm-4fbb4.appspot.com",
  messagingSenderId: "490864968264",
  appId: "1:490864968264:web:2577213cf159a418"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
