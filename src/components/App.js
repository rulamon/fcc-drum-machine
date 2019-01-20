import React from 'react';
import { Controls } from './controls';
import { PadContainer } from './pad-container';
import styles from './styles.scss';

const audiopad = '/src/audio/'

const sampleArr = [
    {name: "hihat", letter: "Q", src: audiopad + "hihat.wav"},
    {name: "openHH", letter: "W", src: audiopad + "openHihat.wav"},
    {name: "cowbell", letter: "E", src: audiopad + "cowbell.wav"},
    {name: "snare1", letter: "A", src: audiopad + "snare1.wav"},
    {name: "snare2", letter: "S", src: audiopad + "snare2.wav"},
    {name: "clap", letter: "D", src: audiopad + "clap.wav"},
    {name: "kick1", letter: "Z", src: audiopad + "kick1.wav"}, 
    {name: "kick2", letter: "X", src: audiopad + "kick2.wav"},
    {name: "bass", letter: "C", src: audiopad + "bass.wav"}
]
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            samples: sampleArr,
            currentSample: {name: "Hi!"},
            count: 0,
            volume: 0.5
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleVolumeClick = this.handleVolumeClick.bind(this);
    }
    handleClick(event) {
        const targetKey = event.target.id;
        switch(targetKey) {
            case "hihat":
            this.setState({currentSample: this.state.samples[0]});
            break;
            case "openHH":
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
            this.setState({currentSample: this.state.samples[0], count: this.state.count + 1});
            break;
            case "w":
            this.setState({currentSample: this.state.samples[1], count: this.state.count + 1});
            break;
            case "e":
            this.setState({currentSample: this.state.samples[2], count: this.state.count + 1});
            break;
            case "a":
            this.setState({currentSample: this.state.samples[3], count: this.state.count + 1});
            break;
            case "s":
            this.setState({currentSample: this.state.samples[4], count: this.state.count + 1});
            break;
            case "d":
            this.setState({currentSample: this.state.samples[5], count: this.state.count + 1});
            break;
            case "z":
            this.setState({currentSample: this.state.samples[6], count: this.state.count + 1});
            break;
            case "x":
            this.setState({currentSample: this.state.samples[7], count: this.state.count + 1});
            break;
            case "c":
            this.setState({currentSample: this.state.samples[8], count: this.state.count + 1});
            break;
            default:
            break;
        }
    };

    handleVolumeClick(event) {
        this.setState({
            volume: event.target.value
        })
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count === this.state.count + 1;
    }
    componentDidUpdate (prevProps, prevState) {

        //play corresponding audio, pause and reset first so it replays on fast click as well
        const audioElement = document.getElementById(this.state.currentSample.letter);
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
        this.state.samples.forEach(element => document.getElementById(element.letter).volume = this.state.volume)
    }  
    render() {
        return(
            <div onKeyDown={this.handleKeyDown} tabIndex="0" style={{outline: "none"}} className="nes-container is-rounded main-container">
                <PadContainer samples={this.state.samples} handleClick={this.handleClick} currentSample={this.state.currentSample} />
                <Controls currentSample={this.state.currentSample} handleVolumeClick={this.handleVolumeClick} />
            </div>
        )
    }
}