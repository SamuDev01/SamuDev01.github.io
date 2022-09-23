
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyDatZyL18n_coYKvtfk7bAJIdckEjF3lJQ",
    authDomain: "flutter-messaging-757eb.firebaseapp.com",
    projectId: "flutter-messaging-757eb",
    storageBucket: "flutter-messaging-757eb.appspot.com",
    messagingSenderId: "818437762557",
    appId: "1:818437762557:web:b7dff4f43afebe90bf3d94",
    measurementId: "G-GETPJXPJL0"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });