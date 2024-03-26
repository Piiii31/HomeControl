import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageComponent from './ImageComponent';
import { Device } from '../../../api/GetDevices';

interface DevicesProps {
    devices: Device[];
}

const Devices: React.FC<DevicesProps> = ({ devices }) => {
    const navigation = useNavigation();

    const handleDevicePress = (device: Device) => {
        navigation.navigate('IRCodeDetails', { device: device });
    };

    const renderItem = ({ item }: { item: Device }) => {
        let imageSource;
        if (item.type === 'Television') {
            imageSource = require('../../../assets/tv.png');
        } else if (item.type === 'Air Conditioner') {
            imageSource = require('../../../assets/airC.png');
        }
        else {
            imageSource = require('../../../assets/unk.jpg');
        }

        return (
            <TouchableOpacity onPress={() => handleDevicePress(item)}>
                <ImageComponent image={imageSource} id={item.id} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={devices}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
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
});

export default Devices;
