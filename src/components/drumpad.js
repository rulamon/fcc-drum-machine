import React from 'react';

export const Drumpad = (props) => {
    return (
        <div className="drum-pad" id={props.name} onClick={props.handleClick} >
            {props.letter}
            <audio src={props.src} className="clip" id={props.letter}></audio>        
        </div>
    )
}