import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div id='nav'>
            <div id='branding'>
                <h1>PEAK</h1>
            </div>
            <div id='links'>
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/about"><p>About</p></NavLink>
            </div>
        </div>
    )
}

export default Navbar;