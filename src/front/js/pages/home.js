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
	imagen: "https://static.wikia.nocookie.net/tekken/images/b/b1/Tekken_8_-_Asuka_Render.jpg/revision/latest?cb=20230425185037&path-prefix=en",
	titulo: "Jun Kazama",

},
{
	imagen: "https://static.wikia.nocookie.net/tekken/images/f/f4/Tekken8-kazuya-mishima-render.png/revision/latest?cb=20230928151903&path-prefix=es",
	titulo: "Kasuya Mishima",
},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Asuka Kazama",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Eddy Gordo",
},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Nina Wlliams",
},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Paul Phoenix",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Marshall Law",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "King",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Lars Alexandersson",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Jack-8",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Ling Xiaoyu",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Leroy Smith",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Lili",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Hwoarang",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Bryan Fury",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Claudio Serafino",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Raven",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Azucena Milagros Ortiz Castillo",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Feng Wei",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Yoshimitsu",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Steve Fox",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Leo",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Sergei Dragunov",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Kuma",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Shaheen",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Panda",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Zafina",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Lee Chaolan",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Alisa Bosconovitch",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
	titulo: "Victor Chevalier",

},
{
	imagen: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
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
