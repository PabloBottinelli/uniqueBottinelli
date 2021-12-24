import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxSv_Pu_l3XSdGKs-im1Zx1P9tMMr3nH0",
    authDomain: "unique-57bfe.firebaseapp.com",
    projectId: "unique-57bfe",
    storageBucket: "unique-57bfe.appspot.com",
    messagingSenderId: "1077432744740",
    appId: "1:1077432744740:web:be7d132294c05044cc51b1"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)