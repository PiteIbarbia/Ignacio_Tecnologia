import React from "react";
import './NavBar.css';
import logo from '../../../Images/General/Logo-Ignacio-Tecnologia.png'

export default function Home () {
    return(
        <div className="menu">
            <div className="menu_img">
                <img src={logo} alt="Ignacio-Tecnología" />
            </div>
            <div className="menu_title">
                <h1>Ignacio Tecnología</h1>
            </div>
        </div>
    )
}