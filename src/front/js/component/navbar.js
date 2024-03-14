import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		 <nav className="navbar navbar-dark" style= {{background: "rgba(33, 33, 33, 1)" }}> 
			<div className="container-fluid">
				<div className="Navbar-image">
					<p className="text-light">Tekken8</p>
				</div>
			</div>
		</nav>
	);
};
