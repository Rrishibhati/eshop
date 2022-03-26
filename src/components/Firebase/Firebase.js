import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD47thiaIj6811ciswS98Kth2zDd8zJ91U",
    authDomain: "eshop-9ec69.firebaseapp.com",
    projectId: "eshop-9ec69",
    storageBucket: "eshop-9ec69.appspot.com",
    messagingSenderId: "870933284936",
    appId: "1:870933284936:web:89662eb243c33ebb3af07d",
    measurementId: "G-HRNK079S9L"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};

