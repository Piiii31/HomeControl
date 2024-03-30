import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Device, useDevices } from '../../api/GetDevices';
import { deleteDevice } from '../../api/Loginauth';
import { QueryClient } from 'react-query';

const DeviceDetails: React.FC = () => {
const route = useRoute();
const navigation = useNavigation();
// Get the device object from the navigation parameters
const { device } = route.params as { device: Device };

const [refreshing, setRefreshing] = useState(false);

  const queryClient = new QueryClient();


  const { data: devices, isLoading, isError, refetch } = useDevices();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  }, []);




  const handledelete = async () => {
    try {
      const response = await deleteDevice(device.id);
      if (response && response.message === 'Device deleted successfully') {
        navigation.navigate('HomePage' as never);
        onRefresh();
      } else {
        console.error('Delete failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.detail}>Device Name: </Text>
      <Text style={styles.text}>{device.name}</Text>
      <Text style={styles.detail}>Device Type: </Text>
        <Text style={styles.text}>{device.type}</Text>
      <Text style={styles.detail}>Device Location: </Text>
        <Text style={styles.text}>{device.deviceLocation}</Text>
      <Text style={styles.text}>{device.receiveNotifications ? 'Yes' : 'No'}</Text>
      <TouchableOpacity onPress={handledelete}>
    <View style={styles.loginbutton}>
        <Text style={styles.Textlogin}>Delete</Text>
    </View>
</TouchableOpacity>
      
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
    loginbutton: {
      
      backgroundColor: '#e89434',
      marginVertical: 200,
      marginLeft: 20,
      marginRight: 20,
      padding: 17,
      borderRadius: 20,
      alignItems: 'center',
  },
  Textlogin: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
 
});

export default DeviceDetails;