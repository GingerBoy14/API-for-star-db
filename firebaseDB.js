const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.DATABASE_API_KEY,
    authDomain: process.env.DATABASE_AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.DATABASE_PROJECT_ID,
    storageBucket: process.env.DATABASE_STORAGE_BUCKET,
    messagingSenderId: process.env.DATABASE_MESSAGING_SENDER_ID,
    appId: process.env.DATABASE_APP_ID,
    measurementId: process.env.DATABASE_MESSAGING_ID
};


module.exports =  (!firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app());
