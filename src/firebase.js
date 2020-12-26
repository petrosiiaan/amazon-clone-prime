import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCmDazOSo9Wj-z4RkiSP9QsXOxJIc06VJU",
  authDomain: "i-message-clone-32590.firebaseapp.com",
  databaseURL: "https://i-message-clone-32590.firebaseio.com",
  projectId: "i-message-clone-32590",
  storageBucket: "i-message-clone-32590.appspot.com",
  messagingSenderId: "741782149054",
  appId: "1:741782149054:web:162057361883e757848bef",
  measurementId: "G-6XJD9DG0HJ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db