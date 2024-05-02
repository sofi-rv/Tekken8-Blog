import React, {useContext} from "react";
import { Context } from "../store/appContext";
import tekkenBackgroundVerticalUrl from "../../img/tekken8-backgroundvertical.png"

export const DetailCards= () => {
    
    return (
        <>
            <div className="Body" style={{
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
            }}> </div>
        </>
    );
};

