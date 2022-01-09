import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKMS_9WoxvqdTn86jJV2IaTp4NXBQcz0k",
  authDomain: "discord-clone-ded97.firebaseapp.com",
  projectId: "discord-clone-ded97",
  storageBucket: "discord-clone-ded97.appspot.com",
  messagingSenderId: "885473341452",
  appId: "1:885473341452:web:7e1cfc35d205ad814a7e29",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
