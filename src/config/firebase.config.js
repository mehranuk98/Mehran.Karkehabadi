import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBJEIIo4mXu9TScpQPh_T1Bj4Q0maO1y4E",
    authDomain: "portfolio-7ddbf.firebaseapp.com",
    projectId: "portfolio-7ddbf",
    storageBucket: "portfolio-7ddbf.appspot.com",
    messagingSenderId: "656481605330",
    appId: "1:656481605330:web:8d4365ec0accd996457f0b",
    measurementId: "G-G91QEN9X8R"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export {app, db}