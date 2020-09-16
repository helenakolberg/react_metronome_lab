import React, { Component } from 'react';
import MetronomeSetter from '../components/MetronomeSetter.js';
import SoundMaker from '../components/SoundMaker.js';

class MetroneContainer extends Component {
    render() {
        return (
            <>
            <MetronomeSetter />
            <SoundMaker />
            </>
        )
    }
}

export default MetroneContainer;