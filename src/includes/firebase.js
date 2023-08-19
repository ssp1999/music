import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDCfA7OYtBZkn3tNQ1IwM-A7WKTk4N9YQA',
  authDomain: 'music-37175.firebaseapp.com',
  projectId: 'music-37175',
  storageBucket: 'music-37175.appspot.com',
  appId: '1:626075259081:web:c437eaa12f682e42e4fd18'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
db.enablePersistence().catch((error) => {
  console.log(`Error enabling persistence: ${error.code}`)
})
const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
