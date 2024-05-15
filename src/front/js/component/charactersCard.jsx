import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css"
const CharactersCard = (props) => {
  return (

    <div className="Card-Hover card m-4 p-0 border-0 col-md-3" style={{ width: "18rem" }}>
      <img src={props.imagen} className="card-img-top image" style={{ width: "18rem", height: "26rem" }} alt="..."></img>
      {/* <div className="card-body" style={{ height: "0rem" }}> */}
        <div className="button-cards middle">
          <Link to="/detailCards"><button className="btn btn-primary text">{props.titulo}</button> </Link>
        </div>
      {/* </div> */}
    </div>
    
  )
}

export default CharactersCard; 