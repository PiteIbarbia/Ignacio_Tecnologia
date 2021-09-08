import React from "react";
import './Home.css';

export default function Home () {
    return(
        <div className="home">
            <h1>Sobre nosotros</h1>
            <div className="home_body">
            <h2>Brindamos soporte técnico informático a particulares o empresas.</h2>
            <ul>
                <li>Servicios de actualización de componentes de netbooks, laptops, notebooks y computadoras de escritorio.</li>
                <li>Servicios de actualización de sistemas operativos de netbooks, laptops, notebooks y computadoras de escritorio.</li>
                <li>Servicios de instalación de Linux, Windows7/10 de netbooks, laptops, notebooks y computadoras de escritorio.</li>
                <li>Servicios de instalación de programas y paquetes de Office.</li>
                <li>Armado de PC para el trabajo, el estudio, la oficina, la casa o para jugar.</li>
                <li>Clases de informática.</li>
                <li>Armado de redes por cable o WiFi a empresas u hogares.</li>
                <li>Instalación de cámaras web por cable o WiFi a hogares o empresas.</li>
                <li>¡¡¡Y mucho más!!!</li>
            </ul>
            <h2>¡¡¡Para saber más mirá nuestro catálogo o escribanos… tu consulta no es molestia!!!</h2>
            </div>
        </div>
    )
}