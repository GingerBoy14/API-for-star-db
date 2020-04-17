const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAqcCag3cj7Io4N9umH77Z98QLL1lp25Mw",
    authDomain: "learnapi-e9739.firebaseapp.com",
    databaseURL: "https://learnapi-e9739.firebaseio.com",
    projectId: "learnapi-e9739",
    storageBucket: "learnapi-e9739.appspot.com",
    messagingSenderId: "528640269686",
    appId: "1:528640269686:web:b6dd512f1251c6d13b2e57",
    measurementId: "G-E6HCF7QSD3"
};


module.exports =  (!firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app());
