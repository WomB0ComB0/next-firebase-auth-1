import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: 'AIzaSyBLXPPWZMmP219HRiPj7nK1h4KkTEJH91A',
  authDomain: 'auth-test-37db9.firebaseapp.com',
  projectId: 'auth-test-37db9',
  storageBucket: 'auth-test-37db9.appspot.com',
  messagingSenderId: '315163825129',
  appId: '1:315163825129:web:d2adf58a8ad46a03433178'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };