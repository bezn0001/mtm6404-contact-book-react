import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIl9L5Bb8JhlyK5cQfhvNmOSmz5jIrwR0",
    authDomain: "conact-list.firebaseapp.com",
    projectId: "conact-list",
    storageBucket: "conact-list.firebasestorage.app",
    messagingSenderId: "314731540273",
    appId: "1:314731540273:web:d94b063080a8620e7f4a10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;