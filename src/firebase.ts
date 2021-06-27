// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAaHvmvsM4wfdzhWw7t81s5p-NS9GsVGHQ',
	authDomain: 'clone-52d9a.firebaseapp.com',
	projectId: 'clone-52d9a',
	storageBucket: 'clone-52d9a.appspot.com',
	messagingSenderId: '820820015077',
	appId: '1:820820015077:web:2b30bff54092606f27610c',
	measurementId: 'G-LGYZVPSZLD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
