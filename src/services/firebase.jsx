import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyDK6__spBRjd3vyNkskg2W3pwDZEZ_yNyQ",
    authDomain: "the-chat-app-1.firebaseapp.com",
    databaseURL: "https://the-chat-app-1.firebaseio.com",
    projectId: "the-chat-app-1",
    storageBucket: "the-chat-app-1.appspot.com",
    messagingSenderId: "997898201074",
    appId: "1:997898201074:web:316cffca2dc9f9c6986d6b"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();