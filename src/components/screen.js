import React from 'react';

export const Screen = (props) => {
    return(
        <div id="display">
            {props.currentSample.name}
        </div>
    )
}