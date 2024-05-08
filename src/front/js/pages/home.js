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
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFkX9X1jROC2r-5IcmIopMLoPlCN5VEhexx4KnlSyKA&s",
	titulo: "Jin Kazama",
	descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}, 
{
	imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFkX9X1jROC2r-5IcmIopMLoPlCN5VEhexx4KnlSyKA&s",
	titulo: "Leroy Smith",
	descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
					<div className="Colum9 d-flex">
						<Card />
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
