import React from 'react';
import { Screen } from './screen';
import { Volume } from './volume';

export const Controls = (props) => {
    return(
        <Screen currentSample={props.currentSample} /> 
    )
}
