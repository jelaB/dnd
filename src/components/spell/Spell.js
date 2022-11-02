import React from "react";

const Spell = ({spell}) => {


    return (<div className='card-container'>
        <div className='card-background'>
            <div className='card-frame'>
                <div className='frame-header'>
                    <h1 className='name'>{spell.name}</h1>
                </div>
                <div className="frame-text-box">

                    <p className="description ftb-inner-margin">{spell.desc[0]} </p>

                    <p className="description">{spell.higher_level[0]}</p>

                    <p className="flavour-text">{spell.material}</p>

                </div>

                <div className="frame-bottom-info inner-margin">
                    <div className="fbi-left">
                        <p>Range: {spell.range}</p>
                        <p>Duration: {spell.duration}</p>
                    </div>

                    <div className="fbi-center"> FAV</div>

                    <div className="fbi-right">
                        Components: {spell.components}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Spell;