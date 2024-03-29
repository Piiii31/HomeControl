import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Device } from '../../api/GetDevices';

const DeviceDetails: React.FC = () => {
const route = useRoute();

// Get the device object from the navigation parameters
const { device } = route.params as { device: Device };

  return (
    <View style={styles.container}>
      
      <Text style={styles.detail}>Device Name: </Text>
      <Text style={styles.text}>{device.name}</Text>
      <Text style={styles.detail}>Device Type: </Text>
        <Text style={styles.text}>{device.type}</Text>
      <Text style={styles.detail}>Device Location: </Text>
        <Text style={styles.text}>{device.deviceLocation}</Text>
      <Text style={styles.detail}>Receive Notifications:</Text>
      <Text style={styles.text}>{device.receiveNotifications ? 'Yes' : 'No'}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
 
  detail: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 20,
    marginBottom: 10,
  },
    text: {
        fontSize: 18,
        marginTop: 5,
    },
 
});

export default DeviceDetails;