import React from 'react';
import { Controls } from './controls.js';
import { PadCollection } from './pad-collection.js';

const sampleObj = {
    "Q": {name: "hihat", src: "https://drive.google.com/uc?export=download&id=1S-32n84FnxzPjkJxMo5idPjinLzn1peI"},
    "W": {name: "open hihat", src: "https://drive.google.com/uc?export=download&id=1B72HLGhBfyKvOpVcbSBDwo0tLUjdp3Xo"},
    "E": {name: "cowbell", src: "https://drive.google.com/uc?export=download&id=1LfFy7HvonwzCypkZrN9nDkC3LXx_SDsR"},
    "A": {name: "snare1", src: "https://drive.google.com/uc?export=download&id=1Pr8f4-oL7etrDd9aWcwNjoWg3HO8iB3u"},
    "S": {name: "snare2", src: "https://drive.google.com/uc?export=download&id=1rDkMo0gxLGNDQ9kwIEHVfXPXkQrGt4mx"},
    "D": {name: "clap", src: "https://drive.google.com/uc?export=download&id=1A4TZMjdpb7JDzSGYAK00SLfcyu7PbW4v"},
    "Z": {name: "kick1", src: "https://drive.google.com/uc?export=download&id=1_hsAlqikDrybbY83Zr5E6mVudjMropvo"}, 
    "X": {name: "kick2", src: "https://drive.google.com/uc?export=download&id=1AJQ2GeO3ywf_hTLqbE-KDJOsovY1eYs4"},
    "C": {name: "bass", src: "https://drive.google.com/uc?export=download&id=1HgkSa_gGRyCxets8oWIbjzotNzQFK4Zm"}
}
export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            samples: sampleArr,
            currentSample: {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeystroke = this.handleKeystroke.bind(this)
    }
    handleClick(event) {
    const targetKey = event.target.id;
        this.setState({
            currentSample: this.state.sampleObj.targetKey
        })
    };
    handleKeyPress(event) {
    const targetKey = event.key;
        this.setState({
            currentSample: this.state.sampleObj.targetKey
        })
    };
    render() {
        return(
            <div>
                <PadCollection sampleArr={this.state.sampleArr} handleClick={this.handleClick} handleKeyPress={this.handleKeyPress} />
                <Controls currentSample={this.state.currentSample} />
            </div>
        )
    }
}

//hoe audio element in andere component triggeren?????