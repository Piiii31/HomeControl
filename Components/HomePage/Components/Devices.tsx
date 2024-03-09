import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ImageComponent from './ImageComponent';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Device } from '../../../api/GetDevices';

interface DevicesProps {
    devices: Device[];
}

const Devices: React.FC<DevicesProps> = ({ devices }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: Device }) => (
        <ImageComponent image={require('../../../assets/Image.png')} id={item.id} />
    );

    const AddPress = () => {
        (navigation.navigate as any)('AddNewDevice');
    };

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={devices}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()} // Ensure key is string
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
        fontSize: 14,
        fontWeight: 'bold',
        alignItems :'center',
        textAlign: 'center',   
    },
});

export default Devices;