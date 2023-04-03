import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdhImpmo5aNCcGZmwXFgJQrWEZ1kQbZWs",
  authDomain: "pace-6b00d.firebaseapp.com",
  projectId: "pace-6b00d",
  storageBucket: "pace-6b00d.appspot.com",
  messagingSenderId: "95181001485",
  appId: "1:95181001485:web:aebf9293b852ba1d311644",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerone = new GithubAuthProvider();
export { auth, provider, providerone };
