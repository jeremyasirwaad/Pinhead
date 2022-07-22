import React from "react";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

function HeaderPrimary() {
	var navigate = useNavigate();

	return (
		<div className="headerPrimary">
			<div className="left part">
				<div className="udemyLogo">
					{/* <img src="..//logo.jpg" className="logo" alt="logo"></img> */}
					<h3 style={{ fontSize: "28px" }}>99Tech.</h3>
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
				<div className="cartDiv">
					<ShoppingCartOutlinedIcon className="icon" />
				</div>
				<div
					className="login button"
					onClick={() => {
						navigate("/login");
					}}
				>
					Log In
				</div>
				<div className="signup button"> Sign up</div>
			</div>
		</div>
	);
}

export default HeaderPrimary;
