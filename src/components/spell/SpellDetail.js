import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getSpellByID} from "../../services/DndService";
import Spell from "./Spell";
import "./card.css"


function SpellDetail(props) {
    const [spellDetails, setSpellDetails] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getSpellByID(location.state.url).then(details =>  setSpellDetails(details));
    }, [location.state.url])


    return (<Spell spell={spellDetails}></Spell>);

}

export default SpellDetail;