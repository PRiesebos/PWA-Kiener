// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.core.setCacheNameDetails({ prefix: "pwawebshop" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

var config = {
    apiKey: "AIzaSyAqfBIX3z84Ji1cHHsQqXc5uK4wtP8yYog",
    authDomain: "vuejs-http-53bfb.firebaseapp.com",
    databaseURL: "https://vuejs-http-53bfb.firebaseio.com",
    projectId: "vuejs-http-53bfb",
    storageBucket: "vuejs-http-53bfb.appspot.com",
    messagingSenderId: "897220143817",
};

firebase.initializeApp(config);

var messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    var notificationTitle = "Background Message Title";
    var notificationOptions = {
        body: "Background Message body.",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
