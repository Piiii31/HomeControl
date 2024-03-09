import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Devices from './Components/Devices'
import AddDevice from './Components/AddDevice'
import Notification from './Components/Notfications'
import SettingsHomePage from './Components/SettingsHomePage'
import RenderStates from './Components/DeviceStatics/RenderStates'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Device, GetDevices } from '../../api/GetDevices'

const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await AsyncStorage.getItem('user');
      console.log('user:', user);  // Debug log 1
      if (user !== null) {
        const { token, user_id: userId } = JSON.parse(user);
        console.log('userId:', userId);  // Debug log 2
        const data = await GetDevices(token, userId);
        console.log('data:', data);  // Debug log 3
        if (data !== undefined) {
          setDevices(data);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={{flexGrow:1}} >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header />
      <Text style={styles.Title}> Devices</Text>
      <View style={styles.UnderHeader}>
        <Devices devices={devices} /> 
        <AddDevice />
        <Text style={styles.Title}> Notifications</Text>
        <Notification/>
        <SettingsHomePage/>
        <RenderStates data={devices}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  UnderHeader : {
    // Remove the marginBottom style
  },
  Title:{
    marginTop : 20,
    marginBottom : 20,
    marginLeft : 20,
    fontSize : 14,
    fontWeight : 'bold'
  }
})

export default HomePage;