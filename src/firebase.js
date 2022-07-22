// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBNRurNW0iDMHCgx8kabc-kQ-bApLYzorU",
	authDomain: "tech-23ba0.firebaseapp.com",
	projectId: "tech-23ba0",
	storageBucket: "tech-23ba0.appspot.com",
	messagingSenderId: "1070933270727",
	appId: "1:1070933270727:web:eb4c72f8594e523868dee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			alert(err);
		});
};
