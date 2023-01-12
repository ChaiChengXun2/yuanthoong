import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrDynbKAqufPC_qFUtyDUb-ia1-sNSvXE",
  authDomain: "yuanthoong-123.firebaseapp.com",
  databaseURL: "https://yuanthoong-123-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yuanthoong-123",
  storageBucket: "yuanthoong-123.appspot.com",
  messagingSenderId: "436359765402",
  appId: "1:436359765402:web:abe2e37914111868a66e23",
  measurementId: "G-V38PBQD9DS"
};

export const app = initializeApp(firebaseConfig);