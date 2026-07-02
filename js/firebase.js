// firebase.js
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyAzog8l0rGmA_OajyGgsvQ0JdacSx37Y08",
authDomain: "smart-food-6e472.firebaseapp.com",
projectId: "smart-food-6e472",
storageBucket: "smart-food-6e472.appspot.com",
messagingSenderId: "72658080811",
appId: "1:72658080811:web:36dd9e24db5799fcfe466e"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);