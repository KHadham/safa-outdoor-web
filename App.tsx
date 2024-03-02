import App from "./app/app"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7-Boev9OcD-9X8ptaf_gL5zog1Set3AI",
  authDomain: "safa-outdoors.firebaseapp.com",
  projectId: "safa-outdoors",
  storageBucket: "safa-outdoors.appspot.com",
  messagingSenderId: "665786080620",
  appId: "1:665786080620:web:9ba2a697e04d4a1259a749",
  measurementId: "G-0E8LVH3WNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp
