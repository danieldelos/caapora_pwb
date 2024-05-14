import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAAFCPjQ-pAL5S7eB0We2YaU16KhaW57CA",
    authDomain: "siscountfirst.firebaseapp.com",
    databaseURL: "https://siscountfirst-default-rtdb.firebaseio.com",
    projectId: "siscountfirst",
    storageBucket: "siscountfirst.appspot.com",
    messagingSenderId: "19360487433",
    appId: "1:19360487433:web:1f00f8a19c67ea10e040d8",
    measurementId: "G-FTQCCP99P1"
};

const apiFirebase = initializeApp(firebaseConfig)

export { apiFirebase }