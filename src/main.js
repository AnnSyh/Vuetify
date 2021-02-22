import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

import './scss/_main.scss'


Vue.config.productionTip = false
// Vue.use(store)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBjuJXbzsGVlQAdr761Jj_UpqyfNUQ9LU",
  authDomain: "test-3c565.firebaseapp.com",
  projectId: "test-3c565",
  storageBucket: "test-3c565.appspot.com",
  messagingSenderId: "394650276804",
  appId: "1:394650276804:web:b4148935c968c1bbf00a91"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})




