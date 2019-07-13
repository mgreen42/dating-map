import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD9vdaK05J7XGth3yEQfkhWk_USqZKJjUs",
  authDomain: "dating-map-2826d.firebaseapp.com",
  databaseURL: "https://dating-map-2826d.firebaseio.com",
  projectId: "dating-map-2826d",
  storageBucket: "",
  messagingSenderId: "956295100953",
  appId: "1:956295100953:web:a5b1fbca4bd218c2"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
