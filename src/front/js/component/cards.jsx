import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css"
const Card = (props) => {
  return (
<div className="row">
    <div className="card m-4 border-0 col-md-3" style={{ width: "18rem" }}>
      <img src={props.imagen} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <div className="button-cards">
          <Link to="/detailCards"><button className="btn btn-primary">Go somewhere</button> </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card; 