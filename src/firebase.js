// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAMLjkCdJMhKfMDnrFzj34rl8Ghu0zQU9M",

  authDomain: "calendar-app-3e448.firebaseapp.com",

  projectId: "calendar-app-3e448",

  storageBucket: "calendar-app-3e448.appspot.com",

  messagingSenderId: "1049812122787",

  appId: "1:1049812122787:web:f854b6fde7cfca40189316",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
