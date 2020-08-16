import React, { Component } from 'react';
import { Text, Slider, Card } from 'react-native-elements';

export default class EqualizerUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lowhz: 100.0,
            lowdb: 0.0,
            highhz: 3000.0,
            highdb: 0.0
        }
    }

    render() {
        return(
            <Card title='Two Band EQ'>
                <Text>Low Hz</Text>
                <Slider 
                    value={this.state.lowhz}
                    onValueChange={(value) => this.setState({ lowhz: value })}
                    maximumValue={500.0}
                    minimumValue={60.0}
                />
                <Text>Low dB</Text>
                <Slider 
                    value={this.state.lowdb}
                    onValueChange={(value) => this.setState({ lowdb: value })}
                    maximumValue={16.0}
                    minimumValue={-16.0}
                />
                <Text>High Hz</Text>
                <Slider 
                    value={this.state.highhz}
                    onValueChange={(value) => this.setState({ highhz: value })}
                    maximumValue={20000.0}
                    minimumValue={1500.0}
                />
                <Text>High dB</Text>
                <Slider 
                    value={this.state.highdb}
                    onValueChange={(value) => this.setState({ highdb: value })}
                    maximumValue={16.0}
                    minimumValue={-16.0}
                />
            </Card>
        );
    }
}