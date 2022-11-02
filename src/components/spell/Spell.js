import React from "react";

const Spell = ({spell}) => {


    return (<div className='card-container'>
        <div className='card-background'>
            <div className='card-frame'>
                <div className='frame-header'>
                    <h1 className='name'>{spell.name}</h1>
                </div>
            </div>

        </div>
    </div>);
}

export default Spell;