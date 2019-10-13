import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBD-no8iEjB50PmPLqZbYKvRo094Vn3XiA",
    authDomain: "vuejs-firebase-01-6126e.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-6126e.firebaseio.com",
    projectId: "vuejs-firebase-01-6126e",
    storageBucket: "",
    messagingSenderId: "774170518714",
    appId: "1:774170518714:web:9621e19eed22ecb9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();