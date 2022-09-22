import { useContext, createContext } from "react";
import React, { useState, useEffect } from "react";
// import { AlertContainer } from "react-alert";
import { useNavigate } from "react-router-dom";
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
import { useHistory } from "react-router";

const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
	// const navigate = useNavigate();
	// const history = useHistory()
	const [user, setUser] = useState({});
	const [dbuserobj, setDbuserobj] = useState({});
	const [cartvalues, setcartvalues] = useState([]);
	const [mylearnings, setMylearnings] = useState([]);

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
		setDbuserobj({});
		localStorage.removeItem("un");
		localStorage.removeItem("ue");

		signOut(auth);
	};

	const [pending, setPending] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
			// navigate("/");
			// console.log("User", currentuser);
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
					setDbuserobj(res.data[0]);
					// console.log(res.data);
					if (res.data[0] != undefined) {
						var d = res.data[0];
						if (d.cart == null) {
							setcartvalues([]);
						} else {
							setcartvalues(d.cart);
						}
					}
					// var f = res.data;

					// console.log(f[0].cart);
					// if (res.data.length != 0) {
					// 	setcartvalues(dbuserobj.cart);
					// }
					// return res.data;
					// console.log(...res.data);
				});
			// console.log(data);
			// console.log(user.email);
		}
	};

	const getmycourses = async () => {
		if (user) {
			const data = await supabase
				.from("users")
				.select()
				.match({ email: user.email });
			if (data.data[0] != undefined) {
				if (data.data[0].mylearning == []) {
					setMylearnings([]);
				} else {
					setMylearnings(data.data[0].mylearning);
					console.log(data.data[0].mylearning);
				}
			}

			// console.log(data);
		}
	};

	useEffect(() => {
		getuserdata();
		getmycourses();
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
			value={{
				googleSignIn,
				logOut,
				user,
				isauthenticated,
				dbuserobj,
				getuserdata,
				setDbuserobj,
				cartvalues,
				setcartvalues,
				getmycourses,
				mylearnings
			}}
		>
			{children}
		</Authcontext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(Authcontext);
};
