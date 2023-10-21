// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCazha0ODGnnDzupxnFM5lQllejOTGIsuY',
  authDomain: 'fight-bbc7e.firebaseapp.com',
  projectId: 'fight-bbc7e',
  storageBucket: 'fight-bbc7e.appspot.com',
  messagingSenderId: '465867563466',
  appId: '1:465867563466:web:3d7056c2d56092fb87ef33',
  measurementId: 'G-JSQ4KYBEFP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
