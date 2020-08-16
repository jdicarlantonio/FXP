import React, { Component } from 'react';
import {
    initialize,
    startDiscoveringPeers,
    stopDiscoveringPeers,
    unsubscribeFromPeersUpdates,
    unsubscribeFromThisDeviceChanged,
    unsubscribeFromConnectionInfoUpdates,
    subscribeOnConnectionInfoUpdates,
    subscribeOnThisDeviceChanged,
    subscribeOnPeersUpdates,
    connect,
    cancelConnect,
    createGroup,
    removeGroup,
    getAvailablePeers,
    getConnectionInfo,
    getGroupInfo,
    receiveMessage,
    sendMessage,
} from 'react-native-wifi-p2p';
import { PermissionsAndroid, View, Button } from 'react-native';

export default class Communicator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devices: []
        }
    }

    async componentDidMount() {
        try {
            await initialize();
            // since it's required in Android >= 6.0
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    'title': 'Access to wi-fi P2P mode',
                    'message': 'ACCESS_COARSE_LOCATION'
                }
            );

            console.log(granted === PermissionsAndroid.RESULTS.GRANTED ? "You can use the p2p mode" : "Permission denied: p2p mode will not work");

            subscribeOnPeersUpdates(this.handleNewPeers);
            subscribeOnConnectionInfoUpdates(this.handleNewInfo);
            subscribeOnThisDeviceChanged(this.handleThisDeviceChanged);

            const status = await startDiscoveringPeers();
            console.log('startDiscoveringPeers status: ', status);
        } catch (error) {
            console.error(error);
        }
    }

    componentWillUnmount() {
        unsubscribeFromConnectionInfoUpdates(this.handleNewInfo);
        unsubscribeFromPeersUpdates(this.handleNewPeers);
        unsubscribeFromThisDeviceChanged(this.handleThisDeviceChanged);
    }

    handleNewInfo = (info) => {
        console.log('OnConnectionInfoUpdated', info);
      };
    
      handleNewPeers = ({ devices }) => {
        console.log('OnPeersUpdated', devices);
        this.setState({ devices: devices });
      };
    
      handleThisDeviceChanged = (groupInfo) => {
          console.log('THIS_DEVICE_CHANGED_ACTION', groupInfo);
      };
    
      connectToFirstDevice = () => {
          console.log('Connect to: ', this.state.devices[0]);
          connect(this.state.devices[0].deviceAddress)
              .then(() => console.log('Successfully connected'))
              .catch(err => console.error('Something gone wrong. Details: ', err));
      };
    
      onCancelConnect = () => {
          cancelConnect()
              .then(() => console.log('cancelConnect', 'Connection successfully canceled'))
              .catch(err => console.error('cancelConnect', 'Something gone wrong. Details: ', err));
      };
    
      onCreateGroup = () => {
          createGroup()
              .then(() => console.log('Group created successfully!'))
              .catch(err => console.error('Something gone wrong. Details: ', err));
      };
    
      onRemoveGroup = () => {
          removeGroup()
              .then(() => console.log('Currently you don\'t belong to group!'))
              .catch(err => console.error('Something gone wrong. Details: ', err));
      };
    
      onStopInvestigation = () => {
          stopDiscoveringPeers()
              .then(() => console.log('Stopping of discovering was successful'))
              .catch(err => console.error(`Something is gone wrong. Maybe your WiFi is disabled? Error details`, err));
      };
    
      onStartInvestigate = () => {
          startDiscoveringPeers()
              .then(status => console.log('startDiscoveringPeers', `Status of discovering peers: ${status}`))
              .catch(err => console.error(`Something is gone wrong. Maybe your WiFi is disabled? Error details: ${err}`));
      };
    
      onGetAvailableDevices = () => {
          getAvailablePeers()
              .then(peers => console.log(peers));
      };

      onSendMessage = () => {
        sendMessage("Hello world!")
          .then((metaInfo) => console.log('Message sent successfully', metaInfo))
          .catch(err => console.log('Error while message sending', err));
    };
  
    onReceiveMessage = () => {
        receiveMessage()
            .then((msg) => console.log('Message received successfully', msg))
            .catch(err => console.log('Error while message receiving', err))
    };
  
    onGetConnectionInfo = () => {
      getConnectionInfo()
          .then(info => console.log('getConnectionInfo', info));
    };
  
    onGetGroupInfo = () => {
        getGroupInfo()
          .then(info => console.log('getGroupInfo', info));
    };

    render() {
        return (
            <View>
                <Button
                    title="Connect"
                    onPress={this.connectToFirstDevice}
                />
                <Button
                    title="Cancel connect"
                    onPress={this.onCancelConnect}
                />
                <Button
                    title="Create group"
                    onPress={this.onCreateGroup}
                />
                <Button
                    title="Remove group"
                    onPress={this.onRemoveGroup}
                />
                <Button
                    title="Investigate"
                    onPress={this.onStartInvestigate}
                />
                <Button
                    title="Prevent Investigation"
                    onPress={this.onStopInvestigation}
                />
                <Button
                    title="Get Available Devices"
                    onPress={this.onGetAvailableDevices}
                />
                <Button
                    title="Get connection Info"
                    onPress={this.onGetConnectionInfo}
                />
                <Button
                    title="Get group info"
                    onPress={this.onGetGroupInfo}
                />
                <Button
                    title="Send message"
                    onPress={this.onSendMessage}
                />
                <Button
                    title="Receive message"
                    onPress={this.onReceiveMessage}
                />
            </View>
        );
    }
}