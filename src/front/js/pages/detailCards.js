import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import tekken8ImageUrl from "../../img/Tekken8-fondo.png";

export const DetailCards= () => {
    const {store, actions} = useContext(Context)
    const {title} = useParams()
    const [currentCharacter, setCurrentCharacter] = useState({
        title: "",
        image: ""
    })

    useEffect(() => {
        if (title && store.characters.length > 0) {
            const result = store.characters.find(character => character.title == title)
            if (result) {
                setCurrentCharacter(result)
            }
        }
    }, [title, store.characters])
    return (
        <>
      <div>
       <img src={currentCharacter.image} className="card-img-top image m-5 mb-0" style={{ width: "18rem", height: "25rem" }} alt="..."></img>
       <h2 className="mt-0">{currentCharacter.title}</h2>
       <h3 className="m-4">Estilo de pelea: {currentCharacter.fighting_style}</h3>
       <iframe src={currentCharacter.fighting_style_video} className="m-4" style={{ width: "400px", height: "200px" }}></iframe>
       </div>
        </>
    );
};