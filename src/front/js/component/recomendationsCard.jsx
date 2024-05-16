import React from "react";
import { Link } from "react-router-dom";


const RecomendationsCard = (props) => {
    return (
<div className="card m-4 p-0 border-0" style={{ width: "18rem" }}>
  <img src={props.imagen} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.descripcion}</p>
    <a href={props.url_articulo} target="_blank" className="btn btn-primary">Más información</a>
  </div>
</div>
    )
}

export default RecomendationsCard;