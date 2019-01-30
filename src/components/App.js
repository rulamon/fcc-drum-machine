import React from 'react';
import { Controls } from './controls';
import { PadContainer } from './pad-container';
import { audiopath, sampleArr } from '../utils/constants';
import styles from './styles.scss';

export class App extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            samples: sampleArr,
            currentSample: {name: "Hi!"},
            count: 0,
            volume: 0.5
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleVolumeClick = this.handleVolumeClick.bind(this);
        this.getSampleByKey = this.getSampleByKey.bind(this);
        this.getSampleByKeyCode = this.getSampleByKeyCode.bind(this);
    }

    // these functions replace the long and ugly swtich statement
    // also you can add more sounds without changing your code
    getSampleByKey(eventKey){
      return this.state.samples.filter((sample) => sample.name === eventKey)
    }

    getSampleByKeyCode(eventKey){
      return this.state.samples.filter((sample) => sample.keyCode === eventKey)
    }

    //handleClick event handler setting currentSample variable to the sample in the array of samples that corresponds to drum-pad's ID
    handleClick(event) {
        const eventKey = event.target.id;
        const sample = this.getSampleByKey(eventKey)
        if(sample.length !== 0){
          this.setState({currentSample: sample[0]})
          this.setState({count: this.state.count + 1})
        }

    };

    //keyDown event handler based on keycodes for functionality on non QWERTY keyboards, setting currentSample to the sample corresponding to the button with ID == key
    // counter used to avoid rerendering on pressing other keys

    handleKeyDown(event) {
        const eventKey = event.keyCode;
        const sample = this.getSampleByKeyCode(eventKey)
        if(sample.length !== 0){
          this.setState({currentSample: sample[0]})
          this.setState({count: this.state.count + 1})
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
