import React, { Component } from 'react';
import { Text, Slider, Card } from 'react-native-elements';

export default class EqualizerUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: 1.0,
            blend: 0.5,
            tone: 900.0,
            drive: 0.5
        }
    }

    render() {
        return(
            <Card title='Distortion'>
                <Text>Volume</Text>
                <Slider 
                    value={this.state.volume}
                    onValueChange={(value) => this.setState({ volume: value })}
                    maximumValue={1.0}
                    minimumValue={0.0}
                />
                <Text>Blend</Text>
                <Slider 
                    value={this.state.blend}
                    onValueChange={(value) => this.setState({ blend: value })}
                    maximumValue={1.0}
                    minimumValue={0.0}
                />
                <Text>Tone</Text>
                <Slider 
                    value={this.state.tone}
                    onValueChange={(value) => this.setState({ tone: value })}
                    maximumValue={6000.0}
                    minimumValue={200.0}
                />
                <Text>Drive</Text>
                <Slider 
                    value={this.state.drive}
                    onValueChange={(value) => this.setState({ drive: value })}
                    maximumValue={1.0}
                    minimumValue={0.0}
                />
            </Card>
        );
    }
}