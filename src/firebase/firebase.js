import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyArzzLflY-gUzssuaRGtJ0uMRVJwOHn7m8',
  authDomain: 'e-com-6b2dd.firebaseapp.com',
  databaseURL: 'https://e-com-6b2dd.firebaseio.com',
  projectId: 'e-com-6b2dd',
  storageBucket: 'e-com-6b2dd.appspot.com',
  messagingSenderId: '991519372119',
  appId: '1:991519372119:web:4356dc8b848f2b8ff6c412',
  measurementId: 'G-BSNZZB0F7M',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
