import React, { Component } from 'react';

class MetronomeSetter extends Component {
    constructor() {
        super()

        this.state = {
            tempoValue: "40"
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({ tempoValue: event.target.value })
    }

    render() {
        return (
        <> 
            <input
                type="range"
                name="tempo" 
                id="tempo"
                min="40"
                max="218"
                value={this.state.tempoValue}
                onChange={this.handleInput}
                />
        </>
    )
    }
}

export default MetronomeSetter;