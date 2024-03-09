import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ImageComponent from './ImageComponent';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Device } from '../../../api/GetDevices';

interface DevicesProps {
    devices: Device[];
}

const Devices: React.FC<DevicesProps> = ({ devices }) => {

    const renderItem = ({ item }: { item: Device }) => (
        <ImageComponent image={{ uri: item.image }} id={item.id} />
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={devices}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()} // Ensure key is string
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
           
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
        fontSize: 14,
        fontWeight: 'bold',
        alignItems :'center',
        textAlign: 'center',   
    },
});

export default Devices;