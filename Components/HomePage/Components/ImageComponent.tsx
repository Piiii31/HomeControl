import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface ImageComponentProps {
    id: any;
    image: any; // changed from uri to image
}

const ImageComponent: React.FC<ImageComponentProps> = ({ id, image }) => { // changed uri to image
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Image 
                    style={styles.image}
                    source={image} // changed uri to image
                />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        gap: 20,
        marginLeft: 20,  
    },
    circle: {
        width: 64,
        height: 64,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'orange',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImageComponent;
