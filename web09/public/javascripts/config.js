    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCLDOytZq-uib_I7FU9UOtu3NjL-z3NVvk",
      authDomain: "inha-c0008.firebaseapp.com",
      projectId: "inha-c0008",
      storageBucket: "inha-c0008.appspot.com",
      messagingSenderId: "705104314164",
      appId: "1:705104314164:web:e467b14a5dcff7de182f61",
      measurementId: "G-EXS9M4N60X"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);