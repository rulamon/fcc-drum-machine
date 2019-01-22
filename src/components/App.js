import React from 'react';
import { Controls } from './controls';
import { PadContainer } from './pad-container';
import styles from './styles.scss';

const audiopath = '/src/audio/'

//array with all samples including name, corresponding keycode for the drum machine and QWERTY letter

const sampleArr = [
    {name: "hihat", keyCode: 65, letter: "Q", src: audiopath + "hihat.wav"},
    {name: "openHH", keyCode: 90, letter: "W", src: audiopath + "openHihat.wav"},
    {name: "cowbell", keyCode: 69, letter: "E", src: audiopath + "cowbell.wav"},
    {name: "snare1", keyCode: 81, letter: "A", src: audiopath + "snare1.wav"},
    {name: "snare2", keyCode: 83, letter: "S", src: audiopath + "snare2.wav"},
    {name: "clap", keyCode: 68, letter: "D", src: audiopath + "clap.wav"},
    {name: "kick1", keyCode: 87, letter: "Z", src: audiopath + "kick1.wav"}, 
    {name: "kick2", keyCode: 88, letter: "X", src: audiopath + "kick2.wav"},
    {name: "bass", keyCode: 67, letter: "C", src: audiopath + "bass.wav"}
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

    //handleClick event handler setting currentSample variable to the sample in the array of samples that corresponds to drum-pad's ID

    handleClick(event) {
        const eventKey = event.target.id;
        switch(eventKey) {
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

    //keyDown event handler based on keycodes for functionality on non QWERTY keyboards, setting currentSample to the sample corresponding to the button with ID == key
    // counter used to avoid rerendering on pressing other keys

    handleKeyDown(event) {
        const eventKey = event.keyCode;
        const  stateKeycode = (index) => this.state.samples[index].keyCode;
        switch(eventKey) {
            case stateKeycode(0):
            this.setState({currentSample: this.state.samples[0], count: this.state.count + 1});
            break;
            case stateKeycode(1):
            this.setState({currentSample: this.state.samples[1], count: this.state.count + 1});
            break;
            case stateKeycode(2):
            this.setState({currentSample: this.state.samples[2], count: this.state.count + 1});
            break;
            case stateKeycode(3):
            this.setState({currentSample: this.state.samples[3], count: this.state.count + 1});
            break;
            case stateKeycode(4):
            this.setState({currentSample: this.state.samples[4], count: this.state.count + 1});
            break;
            case stateKeycode(5):
            this.setState({currentSample: this.state.samples[5], count: this.state.count + 1});
            break;
            case stateKeycode(6):
            this.setState({currentSample: this.state.samples[6], count: this.state.count + 1});
            break;
            case stateKeycode(7):
            this.setState({currentSample: this.state.samples[7], count: this.state.count + 1});
            break;
            case stateKeycode(8):
            this.setState({currentSample: this.state.samples[8], count: this.state.count + 1});
            break;
            default:
            break;
        }
    };

    // click handler to set volume in state to value in button

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
            <div tabIndex="0" className="body-container"onKeyDown={this.handleKeyDown}>
                <div tabIndex="0" style={{outline: "none"}} className="nes-container is-rounded main-container" id="drum-machine">
                    <PadContainer samples={this.state.samples} handleClick={this.handleClick} currentSample={this.state.currentSample} />
                    <Controls currentSample={this.state.currentSample} handleVolumeClick={this.handleVolumeClick} />
                </div>
            </div>
        )
    }
}