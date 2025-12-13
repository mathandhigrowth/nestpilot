// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyA5HKFDIqMhvnlXvwC1Bo8zYO6lc4f2o8E",
  appId: "1:577536445126:web:a6177fef82484a6fa5e5c7",
  messagingSenderId: "577536445126",
  projectId: "pg-management-786c9",
  authDomain: "pg-management-786c9.firebaseapp.com",
  storageBucket: "pg-management-786c9.firebasestorage.app",
  measurementId: "G-WM5FXBSB4D",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification?.title || "New Message";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new message",
    icon: "/icons/Icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
