import React from 'react';

export const Drumpad = (props) => {
    return (
        <div className="drum-pad nes-btn is-primary" id={props.name} onClick={props.handleClick} >
            {props.letter}
            <audio src={props.src} type="audio/wav" className="clip" id={props.letter} preload="auto"  ></audio>        
        </div>
    )
}