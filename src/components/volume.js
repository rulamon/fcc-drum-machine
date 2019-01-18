import React from 'react';
export const Volume = (props) => {
    return(
        <div>
            <button value="0" className="nes-btn is-primary" onClick={props.handleVolumeClick}>Mute</button>
            <button value="0.5" className="nes-btn is-primary" onClick={props.handleVolumeClick}>Quiet</button>
            <button value="1.0" className="nes-btn is-primary" onClick={props.handleVolumeClick}>Loud</button>
        </div>

    )
}