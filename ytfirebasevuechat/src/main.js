import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import firebase from 'firebase'
import { mcall } from 'q';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAvfS1Exad9JqOxM2FcARNEQ305olH071I",
  authDomain: "yt-vue-firestore-chat-97f31.firebaseapp.com",
  databaseURL: "https://yt-vue-firestore-chat-97f31.firebaseio.com",
  projectId: "yt-vue-firestore-chat-97f31",
  storageBucket: "yt-vue-firestore-chat-97f31.appspot.com",
  messagingSenderId: "1041944663888",
  appId: "1:1041944663888:web:8a1b7076c5c62556"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

window.firebase = firebase; 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
