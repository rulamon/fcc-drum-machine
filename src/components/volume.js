import React from 'react';
export const Volume = (props) => {
    return(
        <div className="volume-container">
            <button value="0" className="nes-btn volume-button" onClick={props.handleVolumeClick}>Mute</button>
            <button value="0.5" className="nes-btn volume-button" onClick={props.handleVolumeClick}>Quiet</button>
            <button value="1.0" className="nes-btn volume-button" onClick={props.handleVolumeClick}>Loud</button>
        </div>

    )
}