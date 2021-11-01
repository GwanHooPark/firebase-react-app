
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
 
const firebaseConfig = {
    apiKey: "AIzaSyAU-HtGX0T6Eie069ix56cSv48JIbN4Dhs",
    authDomain: "fir-chat-app-71fc4.firebaseapp.com",
    projectId: "fir-chat-app-71fc4",
    storageBucket: "fir-chat-app-71fc4.appspot.com",
    messagingSenderId: "495827231403",
    appId: "1:495827231403:web:d1fb2b284db85583918dee",
    measurementId: "G-G2TXTBCFWK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);