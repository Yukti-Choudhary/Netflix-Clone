import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjyqte1cwWVOml5Gvlw9JpYXvxQ8e-YrE",
  authDomain: "watchwhiz-98581.firebaseapp.com",
  projectId: "watchwhiz-98581",
  storageBucket: "watchwhiz-98581.appspot.com",
  messagingSenderId: "577648363193",
  appId: "1:577648363193:web:46afb5147922be5db23d68",
  measurementId: "G-8JP36EQV1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
