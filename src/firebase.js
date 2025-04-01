import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // You'll need to replace these with your Firebase config values
  apiKey: "AIzaSyCg_dgksiqBhzxhcVz2uA5E8pxTCwXCrS8",
  authDomain: "pintuproject-2a693.firebaseapp.com",
  projectId: "pintuproject-2a693",
  storageBucket: "pintuproject-2a693.firebasestorage.app",
  messagingSenderId: "278802101821",
  appId: "1:278802101821:web:b2c6425cc9994b847f9c54",
  measurementId: "G-92FZWM5XZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); 