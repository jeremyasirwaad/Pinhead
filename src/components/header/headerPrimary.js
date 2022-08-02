import React from "react";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, auth } from "../../firebase";
import { UserAuth } from "../AuthContext";
import { reload, signOut } from "firebase/auth";

function HeaderPrimary() {
	const { user, setDbuserobj, cartvalues } = UserAuth();
	var navigate = useNavigate();

	const logOut = () => {
		setDbuserobj({});
		localStorage.removeItem("un");
		localStorage.removeItem("ue");

		signOut(auth);
		navigate(0);
	};

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="headerPrimary">
			<div className="left part">
				<div className="udemyLogo">
					{/* <img src="..//logo.jpg" className="logo" alt="logo"></img> */}
					<h3
						style={{ fontSize: "28px" }}
						onClick={() => {
							navigate("/");
						}}
					>
						99Tech.
					</h3>
				</div>
				<div className="categoriesDiv">
					<span
						className="categories"
						onClick={() => {
							navigate("/search");
						}}
					>
						Categories
					</span>
				</div>
			</div>
			<div className="mid part">
				<div className="searchIcon">
					<SearchOutlinedIcon className="icon" />
				</div>
				<input className="searchBar" placeholder="Search for anything"></input>
			</div>
			<div className="right part">
				{/* <div className="businessDiv">
					<span className="business">Busniess</span>
				</div>
				<div className="businessDiv">
					<span className="teach">Teach on 99Tech</span>
				</div> */}
				<div
					className="cart position-relative d-inline-flex"
					onClick={() => {
						navigate("/cart");
					}}
				>
					<i
						class="fas fa fa-shopping-cart fa-lg"
						style={{ fontSize: "22px" }}
					></i>
					<span class="cart-basket d-flex align-items-center justify-content-center">
						{cartvalues.length}
					</span>
					{/* <ShoppingCartOutlinedIcon className="icon" /> */}
				</div>
				{user ? (
					<div style={{ display: "flex", alignItems: "center" }}>
						<div>
							{" "}
							{/* <p>{user.displayName}</p>{" "} */}
							<div style={{ padding: "10px", cursor: "pointer" }}>
								<p> {user.displayName}</p>
							</div>
						</div>
						<div
							className="signup button"
							onClick={() => {
								setDbuserobj({});
								handleSignOut();
								// reload();
							}}
						>
							Sign Out
						</div>
					</div>
				) : (
					<div style={{ display: "flex" }}>
						<div
							className="login button"
							onClick={() => {
								navigate("/login");
							}}
						>
							Login
						</div>
						<div className="signup button"> Sign up</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default HeaderPrimary;
