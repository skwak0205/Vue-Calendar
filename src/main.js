import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
