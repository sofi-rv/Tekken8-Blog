import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import tekkenBackgroundVerticalUrl from "../../img/tekken8-backgroundvertical.png"


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
       {currentCharacter.title}
       <img src={currentCharacter.image} className="card-img-top image" style={{ width: "18rem", height: "25rem" }} alt="..."></img>
        </>
    );
};

