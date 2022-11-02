import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const style = {color: "#F15B2A"};

    return (
        <nav>
            <NavLink to="/" activestyle={style}>Home</NavLink> {" | "}
            <NavLink to="/spells" activestyle={style}>Spells</NavLink>
        </nav>
    );
}

export default Header;