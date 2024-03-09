import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ActivityIndicator, Button, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import ToggleSwitch from 'toggle-switch-react-native';

const VideoESP: React.FC = () => {
    const [isDeviceOn, setIsDeviceOn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cameraIpAddress = 'http://192.168.50.23:5000';

    const handleSwitchToggle = () => {
        setIsDeviceOn((prevValue) => !prevValue);
        fetch('http://192.168.50.104/send-ir', { method: 'GET', mode: 'no-cors' });
    };

    const handleWebViewLoad = () => {
        setIsLoading(false);
    };

    

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator />}
            <View style={[styles.webViewContainer]}>
                <WebView
                    style={styles.webView}
                    source={{ uri: cameraIpAddress }}
                    onLoad={handleWebViewLoad}
                />
            </View>
            <Text style={styles.deviceName}>Device Name</Text>
            <View style={styles.switchContainer}>
                <Text>Device Status:</Text>
                <ToggleSwitch
                    isOn={isDeviceOn}
                    onColor="#e89434"
                    offColor="grey"
                    size="large"
                    onToggle={handleSwitchToggle} // Fix: Pass a single function to the onToggle prop
                />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    webViewContainer: {
        marginTop: 30,
        padding: 10,
        width: '100%',
        borderRadius: 480 / 320,
        aspectRatio: 480 / 320,
        backgroundColor: '',
    },
    webView: {
        flex: 1,
        backgroundColor: 'black',
    },
    deviceName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
});

export default VideoESP;
