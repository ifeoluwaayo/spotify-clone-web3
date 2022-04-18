import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBJc9HSmJbAA4t0E0k0D1-2dPBvjWIzHMQ",
	authDomain: "spotify-clone-web3.firebaseapp.com",
	projectId: "spotify-clone-web3",
	storageBucket: "spotify-clone-web3.appspot.com",
	messagingSenderId: "580672760258",
	appId: "1:580672760258:web:61b084154297a9c4864e5b",
};

const firebaseApp = firebase.initilaizeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
