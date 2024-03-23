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
				<div className="container Cards">
					<div className="Colum1 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum2 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum3 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum4 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum5 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum6 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum7 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>
					<div className="Colum8 d-flex">
						<Card />, <Card />, <Card />, <Card />
					</div>

				</div>
			</div>

			<div className="Body-trailer" style={{ background: "rgba(33, 33, 33, 1)" }}>
				<iframe src="https://www.youtube.com/embed/ToKJfywbe1o" className="m-5" style={{ width: "500px", height: "260px" }}></iframe>
			</div>

			<div className="Recomendations-Body" style={{ backgroundImage: `url(${tekkenBackgroundUrl})` }}>

				<div>
					<h1 className="text-light container p-5 Recomendations">Recomendaciones</h1>
				</div>
				<div className="Articles container pb-5">
					<div className="overflow-auto">
						<div className="row d-flex flex-row flex-nowrap">
							<Card />, <Card />, <Card />, <Card />, <Card />
						</div>
					</div>
				</div>

			</div>

		</>

	);
};
