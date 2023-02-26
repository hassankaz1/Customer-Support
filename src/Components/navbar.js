import React from "react";
import {Link} from "react-router-dom";
import "../Styling/navbar.css";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return(
        <>
            <nav>
            <ul id="navbar">
                <li>
                    <FontAwesomeIcon icon={faHandPeace} />
                </li>
            </ul>
               <p>Nav</p>
            </nav>
        </>
    );

}
export default Navbar;