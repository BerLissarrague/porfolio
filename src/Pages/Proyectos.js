import React from "react";
import ProyectoDetail from"../Components/ProyectDetail/ProyectoDetail "

export default function Proyectos() {
	return (
		<div className="container">
		<ProyectoDetail name="Tragos App"
		description="Proyecto de peticiones a una api de cocktails"
		descriptions="Web basada en la busqueda de tragos y la sujerencia de un 'El Trago del dia'.
		 Las busquedas pueden ser por ingrediente, o por nombre de los cocktails"
		url= "https://berlissarrague.github.io/TragosApp/"
		/>
		</div>
	);
}
