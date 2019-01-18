import React from 'react';

export const Screen = (props) => {
    return(
        <div id="display" className="nes-container">
        <i className="nes-kirby"></i>
            <div className="nes-balloon from-left">{props.currentSample.name}</div>
        </div>
    )
}