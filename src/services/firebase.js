// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, getDocs, getFirestore, doc, collection, addDoc, Timestamp} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4dnZShsCgQWK3MzdT0JIbik9j4--nuZU",
    authDomain: "ecommerce-bd58f.firebaseapp.com",
    projectId: "ecommerce-bd58f",
    storageBucket: "ecommerce-bd58f.appspot.com",
    messagingSenderId: "653634683031",
    appId: "1:653634683031:web:6299521ba3a82f27f129d2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getItems = async () => {
    const items = await getDocs(collection(db, "productos"))
    return items
}

export const getItem = async (id) => {
    const item = await getDoc(doc(db, "items", id))
    return item
}

export const generateOrder = async (order) => {
    const newOrder = addDoc(collection(db,"orders"), {
        ...order,
        date: Timestamp.fromDate(new Date())
    })
    return newOrder
}

export default db;