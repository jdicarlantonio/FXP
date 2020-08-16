import React, { Component } from 'react';
import { Text, Slider, Card } from 'react-native-elements';

export default class DelayUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blend: 0.5,
            volume: 1.0
        }
    }

    render() {
        return(
            <Card title='Overdrive'>
                <Text>Blend</Text>
                <Slider 
                    value={this.state.blend}
                    onValueChange={(value) => this.setState({ blend: value })}
                    maximumValue={1.0}
                    minimumValue={0.0}
                />
                <Text>Volume</Text>
                <Slider 
                    value={this.state.volume}
                    onValueChange={(value) => this.setState({ volume: value })}
                    maximumValue={1.0}
                    minimumValue={0.0}
                />
            </Card>
        );
    }
}