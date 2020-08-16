import React, { Component } from 'react';
import { Text, Slider, Card } from 'react-native-elements';

export default class DelayUI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delayms: 300.0,
            feedback: 0.0,
            wetamt: 50.0,
        }
    }

    render() {
        return(
            <Card title='Delay'>
                <Text>Delay (MS)</Text>
                <Slider 
                    value={this.state.delayms}
                    onValueChange={(value) => this.setState({ delayms: value })}
                    maximumValue={500.0}
                    minimumValue={0.0}
                />
                <Text>Feedback</Text>
                <Slider 
                    value={this.state.feedback}
                    onValueChange={(value) => this.setState({ feedback: value })}
                    maximumValue={100.0}
                    minimumValue={0.0}
                />
                <Text>Wet/Dry</Text>
                <Slider 
                    value={this.state.wetamt}
                    onValueChange={(value) => this.setState({ wetamt: value })}
                    maximumValue={100.0}
                    minimumValue={0.0}
                />
            </Card>
        );
    }
}