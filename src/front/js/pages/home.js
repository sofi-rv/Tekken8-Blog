import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import tekkenBackgroundUrl from "../../img/tekken8-background.png";
import tekkenBackgroundVerticalUrl from "../../img/tekken8-backgroundvertical.png"
import CharactersCard from "../component/charactersCard.jsx";
import RecomendationsCard from "../component/recomendationsCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const infoCharacters = [{
		imagen: "https://static.wikia.nocookie.net/tekken/images/d/d9/T8_-_Jin_Render.jpg/revision/latest?cb=20221209093239&path-prefix=en",
		titulo: "Jin Kazama",
	},
	{
		imagen: "https://www.mordeo.org/files/uploads/2024/01/Devil-Jin-Tekken-8-scaled.webp",
		titulo: "Devil Jin",
	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/fe/Jun_Kazama_TK8.jpg/revision/latest?cb=20230902021633&path-prefix=en",
		titulo: "Jun Kazama",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/f4/Tekken8-kazuya-mishima-render.png/revision/latest?cb=20230928151903&path-prefix=es",
		titulo: "Kasuya Mishima",
	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/b/b1/Tekken_8_-_Asuka_Render.jpg/revision/latest?cb=20230425185037&path-prefix=en",
		titulo: "Asuka Kazama",

	},
	{
		imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
		titulo: "Eddy Gordo",
	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/d/db/Nina-williams-tekken8-render.jpg/revision/latest?cb=20231117180338&path-prefix=es",
		titulo: "Nina Wlliams",
	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/b/bc/Paul_Phoenix_TK8.jpg/revision/latest?cb=20230810110210&path-prefix=en",
		titulo: "Paul Phoenix",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/c/c6/Marshall_Law_TK8.jpeg/revision/latest?cb=20230810110456&path-prefix=en",
		titulo: "Marshall Law",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/1/10/Dfjvatn-0f0c049b-2392-4ce7-9b83-963a48768d87.jpg/revision/latest?cb=20221214104303&path-prefix=es",
		titulo: "King",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/1/16/Lars_Alexandersson_TK8.jpg/revision/latest?cb=20230810105636&path-prefix=en",
		titulo: "Lars Alexandersson",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/6/65/Jack-8.jpg/revision/latest/scale-to-width-down/1200?cb=20230919111619&path-prefix=en",
		titulo: "Jack-8",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/5/5b/TK8_Ling_Xiaoyu.jpg/revision/latest?cb=20231110052420&path-prefix=en",
		titulo: "Ling Xiaoyu",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/f3/Tekken_8_-_Leroy_Render.jpg/revision/latest?cb=20230425190011&path-prefix=en",
		titulo: "Leroy Smith",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/5/58/Lili-tekken8-render.jpg/revision/latest?cb=20240212122318&path-prefix=es",
		titulo: "Lili",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/1/19/Hwoarang_TK8_render.jpg/revision/latest?cb=20230516120648&path-prefix=en",
		titulo: "Hwoarang",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/fd/Bryan_Fury_TK8_render-II.jpeg/revision/latest?cb=20230602001948&path-prefix=en",
		titulo: "Bryan Fury",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/f0/Claudio_T8_Render_Temp.jpg/revision/latest?cb=20230723171724&path-prefix=en",
		titulo: "Claudio Serafino",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/c/ca/Raven_TK8_Render_Full.jpg/revision/latest?cb=20230811131021&path-prefix=en",
		titulo: "Raven",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/7/71/Azucena_Milagros_Ortiz_Tekken_8.png/revision/latest?cb=20230813230429&path-prefix=es",
		titulo: "Azucena Milagros Ortiz Castillo",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/1/13/FengWei_TK8_render.jpg/revision/latest?cb=20231112003002&path-prefix=en",
		titulo: "Feng Wei",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/b/b4/Yoshimitsu_TK8_render.jpg/revision/latest?cb=20230823141811&path-prefix=en",
		titulo: "Yoshimitsu",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/2/26/Steve_TK8_render.jpg/revision/latest?cb=20230823141212&path-prefix=en",
		titulo: "Steve Fox",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/a/a6/Leo-tekken8-render.jpg/revision/latest?cb=20240229201621&path-prefix=es",
		titulo: "Leo",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/5/5e/Dragunov_TK8_render.jpg/revision/latest?cb=20230823140904&path-prefix=en",
		titulo: "Sergei Dragunov",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/8/80/Kuma_TK8_render.jpg/revision/latest?cb=20230823142016&path-prefix=en",
		titulo: "Kuma",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/f/fa/Shaheen_TK8_render.jpg/revision/latest?cb=20230823141432&path-prefix=en",
		titulo: "Shaheen",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/0/00/Panda_TK8_render.jpg/revision/latest?cb=20240225115739&path-prefix=en",
		titulo: "Panda",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/3/31/Zafina_TK8_Render.jpg/revision/latest?cb=20240116162812&path-prefix=en",
		titulo: "Zafina",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/e/e0/Lee_TK8_Render.jpg/revision/latest?cb=20240118161733&path-prefix=en",
		titulo: "Lee Chaolan",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/7/71/Alisa_TK8_Render.jpg/revision/latest?cb=20240116091919&path-prefix=en",
		titulo: "Alisa Bosconovitch",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/e/e4/TK8_Victor_Chevalier_render.jpg/revision/latest?cb=20231103234430&path-prefix=en",
		titulo: "Victor Chevalier",

	},
	{
		imagen: "https://static.wikia.nocookie.net/tekken/images/3/32/ReinaT8render.jpg/revision/latest/scale-to-width-down/1200?cb=20231113232918&path-prefix=en",
		titulo: "Reina",

	}

	]

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
				backgroundImage: `url(${tekkenBackgroundVerticalUrl})`,
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
						{infoCharacters.map((infoCharacters, index) => {
							return (


								<CharactersCard key={index} imagen={infoCharacters.imagen} titulo={infoCharacters.titulo} descripcion={infoCharacters.descripcion} />

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
