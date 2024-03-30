import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WifiUi from './WifiUi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient } from 'react-query';
import { useDevices } from '../../api/GetDevices';

const ConnectWifi = () => {
  const [responseStatus, setResponseStatus] = useState(0);
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const queryClient = new QueryClient();


  const { data: devices, isLoading, isError, refetch } = useDevices();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  }, []);
  // Function to send confirmation response to ESP32
  const sendConfirmationResponse = async () => {
    try {
      // Get the user id and device id from AsyncStorage
      const userId = await AsyncStorage.getItem('useridofdevice');
      const deviceId = await AsyncStorage.getItem('device_id');

      const response = await fetch('http://esp32.local/adddevice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: 'Success',
          userId,
          deviceId
        }),
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
  
      // Parse the response JSON
      console.log('Response status:', response.status);
      if(response.status === 200) {
        setResponseStatus(response.status);
        navigation.navigate('HomePage' as never);
        onRefresh();

      }
      // Set the response status
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // useEffect hook to send confirmation response when component mounts
  useEffect(() => {
    sendConfirmationResponse();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      {/* Render your WifiUi component here */}
      <WifiUi />
    </View>
  );
};

export default ConnectWifi;
