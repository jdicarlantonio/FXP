import React from 'react';
import { ScrollView } from 'react-native';

import EqualizerUI from './EqualizerUI';
import DelayUI from './DelayUI';
import DistortionUI from './DistortionUI';
import OverdriveUI from './OverdriveUI';



class Effects extends React.Component {

    render() {
        return (
            <ScrollView>
                <OverdriveUI />
                <DistortionUI />
                <DelayUI />
                <EqualizerUI />
            </ScrollView>
        );    
    }
}

export default Effects;
