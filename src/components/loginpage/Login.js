import React, { useEffect } from "react";
import HeaderPrimary from "../header/headerPrimary";
import HeaderPopup from "../header/headerPopup";
import Footer from "../footer/footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../AuthContext";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();
	const { googleSignIn, user, isauthenticated } = UserAuth();

	const handlesignIn = async () => {
		try {
			await googleSignIn();

			// navigate("/search");
		} catch (err) {
			isauthenticated();
			console.log(err);
		}
	};

	useEffect(() => {
		if (user != null) {
			navigate("/");
		}
	}, [user]);

	return (
		<div>
			<HeaderPopup />
			<HeaderPrimary />
			
			<div className="loginpage">
				<div className="logincontainer">
					<span className="loginheader">Login to your account!</span>
					<div className="divider"></div>
					<img
						src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
						alt=""
						className="imglogin"
					/>
					{/* <i class="fa-light fa-user"></i> */}
					{/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
					<input type="text" placeholder="email" />
					<input type="password" placeholder="password" />
					<div className="loginbtn">Login</div>
					<span className="dhaas">Forgot Password ?</span>
					<span className="dhaa">
						Dont have an account ? <span>SignUp</span>{" "}
					</span>
					<div className="divider"></div>
					{/* <div
						className="googlelibtn"
						onClick={() => {
							signInWithGoogle();
						}}
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
							alt=""
						/>
						<span>Sign in with google</span>{" "}
					</div> */}
					<GoogleButton
						onClick={() => {
							googleSignIn();
						}}
					></GoogleButton>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
