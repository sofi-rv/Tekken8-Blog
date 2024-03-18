import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import tekkenBackgroundUrl from "../../img/tekken8-background.png";
import Card from "../component/cards.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="Body-Cards" style={{ backgroundImage: `url(${tekkenBackgroundUrl})` }}>
				<div className="Cards p-5 d-flex">
						<Card />
						<Card />
						<Card />
						<Card />
	
				</div>
			</div>

			<div className="Body-trailer" style={{ background: "rgba(33, 33, 33, 1)" }}>
				<iframe src="https://www.youtube.com/embed/ToKJfywbe1o" className="align-items-center m-5"></iframe>
			</div>

			<div className="Recomendations-Body" style={{ backgroundImage: `url(${tekkenBackgroundUrl})` }}>

				<h1 className="text-light text-center p-5">Recomendaciones</h1>
			</div>

		</>

	);
};
