import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import ToggleSwitch from 'toggle-switch-react-native';

const VideoESP: React.FC = () => {
    const [isDeviceOn, setIsDeviceOn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cameraIpAddress = 'http://192.168.1.128';

    const handleSwitchToggle = () => {
        setIsDeviceOn((prevValue) => !prevValue);
    };

    const handleWebViewLoad = () => {
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            {isLoading}
            <View style={styles.webViewContainer}>
                <WebView
                    style={styles.webView}
                    source={{ uri: `${cameraIpAddress}/480x320.mjpeg` }}
                    onLoad={handleWebViewLoad}
                />
            </View>
            <Text style={styles.deviceName}>Device Name</Text>
            <View style={styles.switchContainer}>
                <Text>Device Status:</Text>
                <ToggleSwitch
        
                    isOn={isDeviceOn} // Updated prop here
                    onColor="#e89434"
                    offColor="grey"
                    size="large"
                    onToggle={handleSwitchToggle} // Updated event handler here
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
        marginTop:30,
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
