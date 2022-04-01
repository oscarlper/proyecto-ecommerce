// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp, getDoc, updateDoc, doc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: "AIzaSyA4dnZShsCgQWK3MzdT0JIbik9j4--nuZU",
//    authDomain: "ecommerce-bd58f.firebaseapp.com",
//    projectId: "ecommerce-bd58f",
//    storageBucket: "ecommerce-bd58f.appspot.com",
//    messagingSenderId: "653634683031",
//    appId: "1:653634683031:web:6299521ba3a82f27f129d2"
// };

const firebaseConfig = ({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const generateOrder = async (order) => {
    const newOrder = addDoc(collection(db,"orders"), {
        ...order,
        date: Timestamp.fromDate(new Date())
    })
    return newOrder
}

export const updateStock = async (itemId, quantity) => {
    const item = await getDoc(doc(db, "productos", itemId))
    await updateDoc(doc(db, "productos", itemId), {
        stock: item.data().stock - quantity,
    })
}
 
export default db;