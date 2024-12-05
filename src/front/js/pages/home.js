import React, { useContext } from "react";
import { Context } from "../store/appContext";
import tekken8ImageUrl from "../../img/Tekken8-fondo.png";
import "../../styles/home.css";
import CharactersCard from "../component/charactersCard.jsx";
import RecomendationsCard from "../component/recomendationsCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="Background" style={{
				backgroundImage: `url(${tekken8ImageUrl})`,
				position: 'relative', // Fijar el componente en la ventana
				top: 0, // Alinear el componente en la parte superior
				left: 0, // Alinear el componente en la parte izquierda
				width: '100%', // Establecer el ancho del componente al 100% del viewport
				height: '100%', // Establecer la altura del componente al 100% del viewport
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center', // Alinear la imagen al centro
				/* Otros estilos según sea necesario */
			}}>
				<div className="container">
				<div>
					<h1 className="text-light text-center container p-5 Fighters">Luchadores</h1>
				</div>
					<div className="row justify-content-center">
						{store.characters.map((character, index) => {
							return (


								<CharactersCard key={index} image={character.image} title={character.title} />

							)
						})}
					</div>

				</div>
			</div>

			<div className="Body-trailer d-flex justify-content-center" style={{ background: "rgba(33, 33, 33, 1)" }}>
				<iframe src="https://www.youtube.com/embed/ToKJfywbe1o" className="m-5" style={{ width: "600px", height: "300px" }}></iframe>
			</div>

			<div className="Recomendations-Body" style={{ backgroundImage: `url(${tekken8ImageUrl})` }}>

				<div>
					<h1 className="text-light container p-5 Recomendations">Recomendaciones</h1>
				</div>
				<div className="container pb-5">
					<div className="overflow-auto">
						<div className="row d-flex flex-row flex-nowrap">
							 {infoRecomendations.map((infoRecomendations, index) => {
								return (


									<RecomendationsCard key={index} imagen={infoRecomendations.imagen} titulo={infoRecomendations.titulo} descripcion={infoRecomendations.descripcion} url_articulo={infoRecomendations.url_articulo}/>

								)
							})} 
						</div>
					</div>
				</div>
			

		</div>
		</>
	);
};
