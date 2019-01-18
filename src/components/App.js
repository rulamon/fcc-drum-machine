import React from 'react';
import { Controls } from './controls.js';
import { PadCollection } from './pad-collection.js';
import styles from './styles.scss';

const sampleArr = [
    {name: "hihat", letter: "Q", src: "https://drive.google.com/uc?export=download&id=1S-32n84FnxzPjkJxMo5idPjinLzn1peI"},
    {name: "openHihat", letter: "W", src: "https://drive.google.com/uc?export=download&id=1B72HLGhBfyKvOpVcbSBDwo0tLUjdp3Xo"},
    {name: "cowbell", letter: "E", src: "https://drive.google.com/uc?export=download&id=1LfFy7HvonwzCypkZrN9nDkC3LXx_SDsR"},
    {name: "snare1", letter: "A", src: "https://drive.google.com/uc?export=download&id=1Pr8f4-oL7etrDd9aWcwNjoWg3HO8iB3u"},
    {name: "snare2", letter: "S", src: "https://drive.google.com/uc?export=download&id=1rDkMo0gxLGNDQ9kwIEHVfXPXkQrGt4mx"},
    {name: "clap", letter: "D", src: "https://drive.google.com/uc?export=download&id=1A4TZMjdpb7JDzSGYAK00SLfcyu7PbW4v"},
    {name: "kick1", letter: "Z", src: "https://drive.google.com/uc?export=download&id=1_hsAlqikDrybbY83Zr5E6mVudjMropvo"}, 
    {name: "kick2", letter: "X", src: "https://drive.google.com/uc?export=download&id=1AJQ2GeO3ywf_hTLqbE-KDJOsovY1eYs4"},
    {name: "bass", letter: "C", src: "https://drive.google.com/uc?export=download&id=1HgkSa_gGRyCxets8oWIbjzotNzQFK4Zm"}
]
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            samples: sampleArr,
            currentSample: {},
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleClick(event) {
        const targetKey = event.target.id;
        switch(targetKey) {
            case "hihat":
            this.setState({currentSample: this.state.samples[0]});
            break;
            case "openHihat":
            this.setState({currentSample: this.state.samples[1]});
            break;
            case "cowbell":
            this.setState({currentSample: this.state.samples[2]});
            break;
            case "snare1":
            this.setState({currentSample: this.state.samples[3]});
            break;
            case "snare2":
            this.setState({currentSample: this.state.samples[4]});
            break;
            case "clap":
            this.setState({currentSample: this.state.samples[5]});
            break;
            case "kick1":
            this.setState({currentSample: this.state.samples[6]});
            break;
            case "kick2":
            this.setState({currentSample: this.state.samples[7]});
            break;
            case "bass":
            this.setState({currentSample: this.state.samples[8]});
            break;
            default:
            break;
        }
        this.setState({count: this.state.count + 1});
    };
    handleKeyDown(event) {
        const targetKey = event.key;
        switch(targetKey) {
            case "q":
            this.setState({currentSample: this.state.samples[0]});
            break;
            case "w":
            this.setState({currentSample: this.state.samples[1]});
            break;
            case "e":
            this.setState({currentSample: this.state.samples[2]});
            break;
            case "a":
            this.setState({currentSample: this.state.samples[3]});
            break;
            case "s":
            this.setState({currentSample: this.state.samples[4]});
            break;
            case "d":
            this.setState({currentSample: this.state.samples[5]});
            break;
            case "z":
            this.setState({currentSample: this.state.samples[6]});
            break;
            case "x":
            this.setState({currentSample: this.state.samples[7]});
            break;
            case "c":
            this.setState({currentSample: this.state.samples[8]});
            break;
            default:
            break;
        }
        this.setState({count: this.state.count + 1});
    };
    componentDidUpdate () {
        const audioElement = document.getElementById(this.state.currentSample.letter);
        audioElement.pause();
        audioElement.play();
        console.log(this.state.count)
    }  
    render() {
        return(
            <div onKeyDown={this.handleKeyDown} tabIndex="0" style={{outline: "none"}}>
                <PadCollection samples={this.state.samples} handleClick={this.handleClick} currentSample={this.state.currentSample} />
                <Controls currentSample={this.state.currentSample} />
            </div>
        )
    }
}

//hoe audio element in andere component triggeren?????