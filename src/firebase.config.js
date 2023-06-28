import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDpqojIneb9JQON2sdb12DFlLHkcsOEkTE',
	authDomain: 'house-marketplace-app-1106b.firebaseapp.com',
	projectId: 'house-marketplace-app-1106b',
	storageBucket: 'house-marketplace-app-1106b.appspot.com',
	messagingSenderId: '613137584786',
	appId: '1:613137584786:web:e17ebf8a6b4535759d8c4b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
