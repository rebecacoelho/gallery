import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDskc8FkutW8afSmnY1kT4FP2e6lQ6Uvhc",
    authDomain: "d5reactgallery-9d53b.firebaseapp.com",
    projectId: "d5reactgallery-9d53b",
    storageBucket: "d5reactgallery-9d53b.appspot.com",
    messagingSenderId: "788262826264",
    appId: "1:788262826264:web:50037d02e5cda9a1af2e6d"
};

const firebaseApp = initializeApp(firebaseConfig); // conectat no firebase

export const storage = getStorage(firebaseApp); // conectar no storage

