// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVHooGeudVjuztIrI9u0v88kaJSm59uOw",
  authDomain: "inventory-management-app-f918c.firebaseapp.com",
  projectId: "inventory-management-app-f918c",
  storageBucket: "inventory-management-app-f918c.appspot.com",
  messagingSenderId: "802691765328",
  appId: "1:802691765328:web:d35e15f1b13478eaa46d55",
  measurementId: "G-4JTKH5N6SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export { firestore };
