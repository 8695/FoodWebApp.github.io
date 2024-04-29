// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6aFzh-y4w2vGuoA5ig2jUilqn0mYpS1Q",
  authDomain: "food-oderapp.firebaseapp.com",
  projectId: "food-oderapp",
  storageBucket: "food-oderapp.appspot.com",
  messagingSenderId: "259183815680",
  appId: "1:259183815680:web:65ad4832febee0e5f0fce5",
  measurementId: "G-N1NN1C46K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);