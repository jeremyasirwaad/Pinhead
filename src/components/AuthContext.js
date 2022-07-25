import { useContext, createContext } from "react";
import React, { useState, useEffect } from "react";
// import { AlertContainer } from "react-alert";
// import { useNavigate } from "react-router-dom";
import { supabase } from "../Supabase";
import MoonLoader from "react-spinners/MoonLoader";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [dbuserobj, setDbuserobj] = useState({});

	const isauthenticated = () => {
		const id = localStorage.getItem("fid");
		auth.getUser(id).then((s) => {
			console.log(s);
		});
	};

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		try {
			signInWithPopup(auth, provider).then((data) => {
				// console.log(data.user.displayName);
				const name = data.user.displayName;
				const email = data.user.email;
				const fid = data.user.uid;
				localStorage.setItem("fid", fid);
				localStorage.setItem("un", name);
				localStorage.setItem("ue", email);
				try {
					supabase
						.from("users")
						.insert([{ email, displayname: name }])
						.single()
						.then((e) => {
							console.log(e);
						});
				} catch (err) {
					if (err) {
						// Alert("Account Already Exits");
						console.log("account already exits");
					}
				}

				// alert(data.user.displayName);
			});
		} catch (err) {
			console.log(err);
		}
	};

	const logOut = () => {
		localStorage.removeItem("un");
		localStorage.removeItem("ue");
		signOut(auth);
	};

	const [pending, setPending] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
			// navigate("/");
			console.log("User", currentuser);
			setPending(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const getuserdata = async () => {
		if (user) {
			const data = await supabase
				.from("users")
				.select()
				.match({ email: user.email })
				.then((res) => {
					setDbuserobj(res.data);
					// console.log(res.data);
				});
			// console.log(data);
			// console.log(user.email);
		}
	};

	useEffect(() => {
		getuserdata();
	}, [user]);

	if (pending) {
		return (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<MoonLoader size={50} color="#ffa743"></MoonLoader>;
			</div>
		);
	}

	return (
		<Authcontext.Provider
			value={{ googleSignIn, logOut, user, isauthenticated, dbuserobj }}
		>
			{children}
		</Authcontext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(Authcontext);
};
