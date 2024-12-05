import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css"
const CharactersCard = (props) => {
  return (

    <div className="card m-4 p-0 border-0 col-md-3" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top image" style={{ width: "18rem", height: "25rem" }} alt="..."></img>
        <div className="button-cards">
        <Link to={`/detailCard/${props.title}`}><button className="btn btn-danger border-0 text">{props.title}</button> </Link>
        </div>
    </div>
    
  )
}

export default CharactersCard; 