import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyAROkhY9xiBJZmdspUBAfFYJx9pK_dk0q4",
  authDomain: "jckgram-56866.firebaseapp.com",
  databaseURL: "https://jckgram-56866.firebaseio.com",
  projectId: "jckgram-56866",
  storageBucket: "jckgram-56866.appspot.com",
  messagingSenderId: "502199767578",
  appId: "1:502199767578:web:77c386fe1cf1d52262f7a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();
export { projectStorage, projectFirestore, timestamp, projectAuth };