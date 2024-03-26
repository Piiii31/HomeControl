import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';

const VideoESPFull = () => {
    const [isLoading, setIsLoading] = useState(true);
    const cameraIpAddress = 'http://192.168.1.138:5000';

    useEffect(() => {
        async function lockOrientation() {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); // Lock the orientation to landscape mode
            StatusBar.setHidden(true); // Hide the status bar
        }
        lockOrientation(); // Call the async function inside useEffect
        return () => {
            ScreenOrientation.unlockAsync(); // Unlock the orientation when the component unmounts
            StatusBar.setHidden(false); // Show the status bar
        };
    }, []);

    const handleWebViewLoad = () => {
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <WebView
                style={styles.webView}
                source={{ uri: cameraIpAddress }}
                onLoad={handleWebViewLoad}
                allowsFullscreenVideo={true} // Enable full-screen video playback
                scalesPageToFit={true} // Fit content to the WebView bounds
                scrollEnabled={true} // Disable scrolling
                bounces={false} // Disable bounce effect when scrolling beyond content bounds
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    webView: {
        flex: 1,
        width: Dimensions.get('screen').width+70,
        height: Dimensions.get('screen').height,
    },
});

export default VideoESPFull;
