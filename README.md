# Epickup- Taxi booking app
Front-End :React-Native
Back-End and Database: Firebase


### After downloadig the code add a file named firbase.js and add the firbase credentials there
for example:
import firebase from 'firebase'



const firebaseApp=firebase.initializeApp({
    
        apiKey: "your api key",
        authDomain: "..",
        databaseURL: "..",
        projectId: "todoapp",
        storageBucket: "..",
        messagingSenderId: "..",
        appId: "..",
        measurementId: .."
      
    
})
const db=firebaseApp.firestore();
export default  db;
