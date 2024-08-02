// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc5Xyp7YBJHcE3DzX6uLaYnrpyDqNmW6o",
  authDomain: "job-portal-demo-8e4ea.firebaseapp.com",
  projectId: "job-portal-demo-8e4ea",
  storageBucket: "job-portal-demo-8e4ea.appspot.com",
  messagingSenderId: "394843883309",
  appId: "1:394843883309:web:a7c18ac3958d4b16c8f5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;