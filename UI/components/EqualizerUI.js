import React, { Component } from 'react';
import { Slider, Card } from 'react-native-elements';

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
                <Slider 
                    value={this.state.lowhz}
                    onValueChange={(value) => this.setState({ lowhz: value })}
                    maximumValue={500.0}
                    minimumValue={60.0}
                />
                <Text>Value: {this.state.lowhz}</Text>
            </Card>
        );
    }
}