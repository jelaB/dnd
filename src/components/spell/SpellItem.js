import React from 'react';
import {Link} from "react-router-dom";

function SpellItem(props) {

    return (
        <React.Fragment key={props.spell.index}>
            <li>
                <Link to={"/details/" + props.spell.index}  state={{ url: props.spell.url }} >
                    {props.spell.name}
                </Link>
            </li>
        </React.Fragment>
    );
}

export default SpellItem;