// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCazha0ODGnnDzupxnFM5lQllejOTGIsuY',
  authDomain: 'fight-bbc7e.firebaseapp.com',
  databaseURL: 'https://fight-bbc7e-default-rtdb.firebaseio.com',
  projectId: 'fight-bbc7e',
  storageBucket: 'fight-bbc7e.appspot.com',
  messagingSenderId: '465867563466',
  appId: '1:465867563466:web:3d7056c2d56092fb87ef33',
  measurementId: 'G-JSQ4KYBEFP'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;
