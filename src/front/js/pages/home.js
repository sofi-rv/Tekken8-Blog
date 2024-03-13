import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import tekkenBackgroundUrl from "../../img/tekken8-background.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="Background-Body">
			<img src={tekkenBackgroundUrl} className="background-image"></img>
		</div>
		<div className="Cards">
		</div>
		</>
		
	);
};
