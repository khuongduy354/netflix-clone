import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzRfHhrFTYhGk_HMGo8X9LfB_r4mjpuiM",
  authDomain: "netflix-kdi-clone.firebaseapp.com",
  projectId: "netflix-kdi-clone",
  storageBucket: "netflix-kdi-clone.appspot.com",
  messagingSenderId: "49844989324",
  appId: "1:49844989324:web:3724450c1af3979ef87aa9",
  measurementId: "G-Z3Z8E8T53G",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default db;
