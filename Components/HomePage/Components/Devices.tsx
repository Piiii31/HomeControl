import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import ImageComponent from './ImageComponent';
import { Ionicons } from '@expo/vector-icons';

const Devices = () => {
    const data = [
        { id: '1', image: '' },
        { id: '2', image: 'image2.jpg' },
        { id: '3', image: 'image2.jpg' },
        // Add more data objects as needed
    ];

    const renderItem = ({ item }: { item: { id: string, image: string } }) => (
        <ImageComponent image={require('../../../assets/Image.png')} id={item.id} />
    );

    const AddPress = () => {
        // Define what should happen when the button is pressed
    };

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={AddPress}>
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    loginbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        width: 64,
        height: 64,
        borderWidth: 0,
        borderRadius: 24,
        backgroundColor: '#e89434',
    },
    Text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems :'center',
        textAlign: 'center',
        
    },
});

export default Devices;
