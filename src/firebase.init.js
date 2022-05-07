// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFQDVviGYPbW65lDNjzA_eByWMgYfKsjw",
  authDomain: "car-warehouse-management-site.firebaseapp.com",
  projectId: "car-warehouse-management-site",
  storageBucket: "car-warehouse-management-site.appspot.com",
  messagingSenderId: "393227449754",
  appId: "1:393227449754:web:605cd39fbc09b47f5ff623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;