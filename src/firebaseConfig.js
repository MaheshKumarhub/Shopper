// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD98mTjc2FPkeT1i8JwO_trfkELvLGSmK8",
  authDomain: "shopper-99b85.firebaseapp.com",
  projectId: "shopper-99b85",
  storageBucket: "shopper-99b85.appspot.com",
  messagingSenderId: "268641656454",
  appId: "1:268641656454:web:4af90674b12461e54cbb07",
  measurementId: "G-Z5N9XHVDP5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
