import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import tekkenBackgroundUrl from "../../img/tekken8-fondo.png";
import CharactersCard from "../component/charactersCard.jsx";
import RecomendationsCard from "../component/recomendationsCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const infoRecomendations = [
		{
			imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png",
			titulo: "Curiosidades de Tekken 8",
			descripcion: "30 curiosidades de Tekken 8 que deberías conocer",
			url_articulo: "https://youtu.be/5a6uVr5KqBY"
		},
		{
		imagen: "https://static.wikia.nocookie.net/tekkenlatino/images/8/8d/Tekken_1_game_coverr.jpg/revision/latest/scale-to-width-down/300?cb=20091206004636&path-prefix=es",
		titulo: "Saga Tekken",
		descripcion: "Conoce más sobre todos los juegos de la Saga Tekken, en orden cronológico",
		url_articulo: "https://tekken.fandom.com/es/wiki/Saga_Tekken"
	},
	{
		imagen: "https://lh6.googleusercontent.com/proxy/iLiGSmCcO037WLaR5mbRJmNKV425R7E3GrOKgoDn7YQ3J9bKXLyWVvV3ix401yWx9eH2JBV4bwh-Cvi3Lia7Nvr1Mj0BX_UcPetS5gckBht_7rY",
		titulo: "La Saga Tekken ha vendido 57 millones de copias",
		descripcion: "Shuhei Yoshida y Katsuhiro Harada, revelan la cantidad de ventas de la Saga Tekken",
		url_articulo: "https://www.mundodeportivo.com/alfabeta/bandai-namco/la-saga-tekken-ha-vendido-57-millones-de-copias"
	},
	{
		imagen: "https://i.ytimg.com/vi/YP8Ik9z1GFI/maxresdefault.jpg",
		titulo: "Resumen de la historia de Tekken 1 al Tekken 8",
		descripcion: "Si quieres conocer más de la Saga Tekken, aquí te dejamos un vídeo que resume su historia",
		url_articulo: "https://youtu.be/YP8Ik9z1GFI"
	},
	{
		imagen: "https://m.media-amazon.com/images/I/71Nk-CvsqrL._AC_UF894,1000_QL80_.jpg",
		titulo: "TEKKEN: Blood Vengeance",
		descripcion: "Tekken: Blood Vengeance es una película de animación 3D de acción dirigida por Youchi Mori estrenada el 3 de septiembre de 2011 en Japón. Se basa en los hechos que suceden en Tekken 6",
		url_articulo: "https://youtu.be/H5VwQ73okmg"
	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/7/7b/Tekken-Bloodline-Netflix-q14ybl319fo81.jpg/revision/latest?cb=20220918161310&path-prefix=es",
		titulo: "Tekken: Bloodline",
		descripcion: "La serie comienza entre Tekken 2 y Tekken 3. Jin Kazama pierde a su madre y se embarca en una búsqueda de venganza contra Ogre entrenando con su abuelo, Heihachi Mishima",
		url_articulo: "https://youtu.be/x6-donCAnCc"
	}

]
	return (
		<>
			<div className="Body-Cards" style={{
				backgroundImage: `url(${tekkenBackgroundUrl})`,
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

			<div className="Recomendations-Body" style={{ backgroundImage: `url(${tekkenBackgroundUrl})` }}>

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