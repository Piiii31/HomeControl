import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { ToastAndroid } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';
import { addDevice } from '../../api/Loginauth';
import { Picker } from '@react-native-picker/picker';

const AddNewDevice: React.FC = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('yes');
    const [receiveNotifications, setReceiveNotifications] = useState(true);
    const [image, setImage] = useState<string | null>(null);
    const [name, setname] = useState('');
    const [type, setType] = useState('');
    const [deviceLocation, setDeviceLocation] = useState('');
  
    const handleAddDevice = async () => {
      try {
        // Call addDevice with Name and type as separate arguments
        await addDevice(name, type, deviceLocation, receiveNotifications, image || '');
        ToastAndroid.show('Device added successfully', ToastAndroid.SHORT);
        // Reset form values
        setname('');
        setType('');
        setDeviceLocation('');
        setValue('yes');
        setReceiveNotifications(true);
        setImage(null);
        // Navigate back to the homepage
        navigation.navigate('ConnectWifi' as never);
      } catch (error) {
      console.error('Error adding device:', error);
      ToastAndroid.show('Error adding device', ToastAndroid.SHORT);
      }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // Get the local file URI
            const localUri = (result as any).assets[0].uri;
            // Create a new file name and path
            const newFileName = `${Math.round(Math.random() * 1000)}.jpeg`;
            const newPath = `${FileSystem.documentDirectory}assets/${newFileName}`;
            // Copy the file to the new location
            await FileSystem.copyAsync({
                from: localUri,
                to: newPath,
            });
            ToastAndroid.show('Image uploaded successfully', ToastAndroid.SHORT);
            // Now you can use the new path in your state, DB, etc.
            setImage(newPath);
        }
    };

    return (
        <View>
            <Text style={styles.title}>Enter your Device</Text>
            <ScrollView>
                <TextInput style={styles.input} placeholder="Device name" value={name} onChange={(e) => setname(e.nativeEvent.text)} />
                <View style={styles.types}>
                    <Picker
                        selectedValue={type}
                        onValueChange={(itemValue) => setType(itemValue)}
                        
                    >
                        <Picker.Item label="Select Device Type" value="" style={{color:'grey'}}/>
                        <Picker.Item label="Television" value="Television" />
                        <Picker.Item label="Air Conditioner" value="Air Conditioner" />
                        
                    </Picker>
                </View>
                <TextInput style={styles.input} placeholder="Device Location" onChangeText={text => setDeviceLocation(text)} />
            </ScrollView>
            <View>
                <Text style={styles.text}>Do you want to receive notifications for device status ?</Text>
                <View>
                    <RadioButton.Group onValueChange={newValue => { setValue(newValue); setReceiveNotifications(newValue === 'yes'); }} value={value}>
                        <View style={styles.text1}>
                            <View style={styles.option}>
                                <RadioButton value="yes" color='#e89434'/>
                                <Text style={{fontSize: 16,width :150}}>Yes</Text>
                            </View>
                            <View style={styles.option}>
                                <RadioButton value="no" color='#e89434' />
                                <Text style={{fontSize: 16,width:150}}>No</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
                <Text style={styles.text}>Device Image</Text>
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={{color:'white', textAlign: 'center',width:150}}>Upload Image</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submit} onPress={handleAddDevice}>
                <Text style={{color:'white',textAlign: 'center',width:100}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    title:{
        fontSize: 16,
        fontWeight: '500',
        lineHeight:30,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        color :'grey'
    },
    input:{
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 100,
    },
    text:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight:30,
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20,
        width: 300,    
    },
    text1:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        marginLeft: 30,
        width: 300,
    },
    option: {
        width: 100,
        flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
      },
      button:{
        padding: 10,
        backgroundColor: '#e89434',
        borderRadius: 100,
        width: 148,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom: 10,
      },
      submit:{
        padding: 10,
        backgroundColor: '#030303',
        borderRadius: 100,
        width: 335,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 0,
        marginTop: 20,
      },
        types:{
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 100,
            color: 'grey',
        }
    
    })

export default AddNewDevice