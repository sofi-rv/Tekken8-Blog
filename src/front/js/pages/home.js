import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import tekkenBackgroundUrl from "../../img/tekken8-background.png";
import tekkenBackgroundVerticalUrl from "../../img/tekken8-backgroundvertical.png"
import Card from "../component/cards.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
const infoCard = [{
	imagen: "https://static.wikia.nocookie.net/tekken/images/d/d9/T8_-_Jin_Render.jpg/revision/latest?cb=20221209093239&path-prefix=en",
	titulo: "Jin Kazama",
}, 
{
	imagen: "https://static.wikia.nocookie.net/tekken/images/f/f0/Devil_Jin_TK8_Render.jpg/revision/latest?cb=20240126004007&path-prefix=en",
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
	return (
		<>
			<div className="Body-Cards" style={{ backgroundImage: `url(${tekkenBackgroundVerticalUrl})`,
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
				<div className="container Cards">
					{infoCard.map((infoCard,index) => { 
						return (

					<div className="Colum1 d-flex">
						<Card key={index} imagen = {infoCard.imagen} titulo = {infoCard.titulo} descripcion = {infoCard.descripcion}/>
					</div>
					)
				})}

				</div>
			</div>

			<div className="Body-trailer d-flex justify-content-center" style={{ background: "rgba(33, 33, 33, 1)" }}>
				<iframe src="https://www.youtube.com/embed/ToKJfywbe1o" className="m-5" style={{ width: "600px", height: "300px" }}></iframe>
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
