import React from 'react';
import { Screen } from './screen';
import { Volume } from './volume';

export const Controls = (props) => {
    return(
        <div id="controls-container">
            <Screen currentSample={props.currentSample} />
            <Volume handleVolumeClick={props.handleVolumeClick} />
        </div>
    )
}
