import React from 'react';
import { Drumpad } from './drumpad';

export const PadCollection = (props) => {
    const drumpads = props.samples.map(element => <Drumpad src={element.src} key={element.letter} letter={element.letter} name={element.name} handleClick={props.handleClick} currentSample={props.currentSample} />)
    return (
        <div>
        {drumpads}
        </div>
    )
}