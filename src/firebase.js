import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCYyQoHk54DQFDhaRiYMrIufNBb4ZeQ6c8",
    authDomain: "portfoliocontact-efab9.firebaseapp.com",
    projectId: "portfoliocontact-efab9",
    storageBucket: "portfoliocontact-efab9.appspot.com",
    messagingSenderId: "683931456803",
    appId: "1:683931456803:web:6656a47072ab6e2886a896",
    measurementId: "G-MED18TYXSP"
  };




const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db;


