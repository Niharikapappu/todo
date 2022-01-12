

import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMKWo-mjHiK6e_qA_bbpHvUC8iApeNXA8",
    authDomain: "neww-3fa31.firebaseapp.com",
    projectId: "neww-3fa31",
    storageBucket: "neww-3fa31.appspot.com",
    messagingSenderId: "362280838723",
    appId: "1:362280838723:web:aed66d5082d10a5c2f56f6",
    measurementId: "G-YQXL7Z8MQR"

});

const db =firebaseApp.firestore();


export default db;