import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCRNFfbkSNgwbxesO8XjV-cePpG5Ge-zBs",
    authDomain: "netflix-clone-c750b.firebaseapp.com",
    projectId: "netflix-clone-c750b",
    storageBucket: "netflix-clone-c750b.appspot.com",
    messagingSenderId: "720681416702",
    appId: "1:720681416702:web:8a85c9b435d7a2175c72af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {auth};
  export default db;