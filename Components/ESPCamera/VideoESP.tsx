import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ActivityIndicator, Button, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import ToggleSwitch from 'toggle-switch-react-native';

const VideoESP: React.FC = () => {
    const [isDeviceOn, setIsDeviceOn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cameraIpAddress = 'http://192.168.1.138:5000';

    

    const handleWebViewLoad = () => {
        setIsLoading(false);
    };

    

    return (
        <View style={styles.container}>
            
            <View style={[styles.webViewContainer]}>
                <WebView
                    style={styles.webView}
                    source={{ uri: cameraIpAddress }}
                    onLoad={handleWebViewLoad}
                    focusable={true}
                    
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
        marginLeft: 10,
        width: 400,
        borderRadius: 480 / 320,
        aspectRatio: 480 / 320,
        backgroundColor: '',
    },
    webView: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'white',
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
