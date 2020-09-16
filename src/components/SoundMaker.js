import React, { Component } from 'react';

class SoundMaker extends Component {

    constructor() {
        super()

        this.state = {
            createSoundAtInterval: null,
            playPause: "Play"
        }

        this.beep = this.beep.bind(this);
        this.runMetronomeSound = this.runMetronomeSound.bind(this);
        this.stopMetronomeSound = this.stopMetronomeSound.bind(this);
        this.handleClickPlay = this.handleClickPlay.bind(this);
    }

    beep() {
        var snd = new Audio("data:audio/mpeg;base64,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");
        snd.play();
    }

    runMetronomeSound() {
         this.setState({createSoundAtInterval:
            setInterval(() => {
                this.beep();
            }, 1000)
        })
    };
    
    stopMetronomeSound() {
        clearInterval(this.state.createSoundAtInterval);
    }

    handleClick() {
        if(this.state.createSoundAtInterval !== null) {
          this.stopMetronomeSound();
          this.setState({createSoundAtInterval: null});
          this.setState({playPause: "Play"})
        }
        if(this.state.createSoundAtInterval === null) {
            this.runMetronomeSound();
            this.setState({playPause: "Stop"})
        }
    }

    render() {
        return (
            <>
                <button id="play" onClick={this.handleClick}>{this.state.playPause}</button>
            </>
        )
    }
}


export default SoundMaker;