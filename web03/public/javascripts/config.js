  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCY5CBX_un9KMYBCwW32kYMc-wlneIURio",
    authDomain: "kosmo-75aff.firebaseapp.com",
    databaseURL: "https://kosmo-75aff-default-rtdb.firebaseio.com",
    projectId: "kosmo-75aff",
    storageBucket: "kosmo-75aff.appspot.com",
    messagingSenderId: "97065197336",
    appId: "1:97065197336:web:5d5d2cb30cf35e6249086d"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);