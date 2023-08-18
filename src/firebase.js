import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAL3r-3wYSin5DBwDmrJOPeD93oM_LgGgI",
  authDomain: "cyberknight-messager.firebaseapp.com",
  projectId: "cyberknight-messager",
  storageBucket: "cyberknight-messager.appspot.com",
  messagingSenderId: "24067223028",
  appId: "1:24067223028:web:2533b28074b4f2324bdda1",
  measurementId: "G-RMEC5YMM3X"
  };

// Initialize Firebase
// initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export default app;
