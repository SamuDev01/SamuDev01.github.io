importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyA46ig1freqiqH_Iid0gJz5FUXEuWKZ74Y",
  authDomain: "desmotec-webapp.firebaseapp.com",
  projectId: "desmotec-webapp",
  storageBucket: "desmotec-webapp.appspot.com",
  messagingSenderId: "997291294155",
  appId: "1:997291294155:web:374ec553c86f195adf0a4e"
});

const messaging = firebase.messaging();