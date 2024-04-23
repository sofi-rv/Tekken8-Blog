import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		 <nav className="navbar navbar-dark" style= {{background: "rgba(33, 33, 33, 1)" }}> 
			<div className="container-fluid">
				<div className="Navbar-image">
					{/* <p className="text-light">Tekken8</p> */}
					<img className= "logo-tekken8" src= "https://p325k7wa.twic.pics/high/tekken/tekken-8/00-page-setup/tekken8_logo.jpg.png?twic=v1/resize=760/step=10/quality=80"></img>
				</div>
			</div>
		</nav>
	);
};
