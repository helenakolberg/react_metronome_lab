import React, { Component } from 'react';
import SoundMaker from './SoundMaker.js';

class MetronomeSetter extends Component {
    constructor() {
        super()

        this.state = {
            tempoValue: "40"
            // millisecondValue: "1500"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ tempoValue: event.target.value })
    }

    // bpmToMilliseconds() {
    //     const bpm = parseInt(this.state.tempoValue);
    //     const milliseconds = 60000 / bpm
    //     this.setState({millisecondValue: milliseconds})
    // }

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

                <SoundMaker tempo={milliseconds} />
            </>
    )
    }
}

export default MetronomeSetter;