import firebase from 'firebase/app'
import 'firebase/firestore'

var config= {
        apiKey: "AIzaSyBq6ndRF4-htZPN5a5pULQ3WZIed7U8fKQ",
        authDomain: "project-track-96c3c.firebaseapp.com",
        databaseURL: "https://project-track-96c3c.firebaseio.com",
        projectId: "project-track-96c3c",
        storageBucket: "project-track-96c3c.appspot.com",
        messagingSenderId: "269482104183",
        appId: "1:269482104183:web:1008eb26d5bfc8b94dbd72"
};
firebase.initializeApp(config)
const db=firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db;