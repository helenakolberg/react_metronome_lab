import React, { Component } from 'react';
import SoundMaker from './SoundMaker.js';

class MetronomeSetter extends Component {
    constructor() {
        super()

        this.state = {
            tempoValue: "40"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ tempoValue: event.target.value })
    }

    render() {
        const bpm = parseInt(this.state.tempoValue);
        const milliseconds = 60000 / bpm;

        return (
            <> 
                <input
                    type="range"
                    name="tempo" 
                    id="tempo"
                    min="40"
                    max="218"
                    value={this.state.tempoValue}
                    onChange={this.handleChange}
                />
                <h4>{this.state.tempoValue} BPM</h4>

                <SoundMaker tempo={milliseconds}/>
            </>
    )
    }
}

export default MetronomeSetter;