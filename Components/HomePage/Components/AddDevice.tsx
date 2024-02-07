import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddDevice = () => {
    const navigation = useNavigation();

    const AddPress = () => {
        (navigation.navigate as any)('AddNewDevice');
    };

    return (
        <View style={styles.container}>
            <View style={styles.button} >
                <Ionicons name="settings-outline" size={20} color="white" style={styles.icon} />
                <View>
                <Text style={styles.buttonText}>Add New Device</Text>
                    <Text style={styles.subText}>Control your devices with ease!</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={AddPress}>
                <Text style={styles.addButtonText}>Add Device</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e89434',
        borderRadius: 25,
        padding: 20,
        margin: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e89434',
        marginEnd :100,
        
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        alignItems : "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subText: {
        color: 'white',
        fontSize: 12,
    },
    addButton: {
        backgroundColor: 'black',
        marginTop: 23,
        padding: 10,
        width: 250,
        height :45,
        borderRadius: 50,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default AddDevice;
