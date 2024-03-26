import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, RefreshControl } from 'react-native';
import Header from './Components/Header';
import Devices from './Components/Devices';
import AddDevice from './Components/AddDevice';
import Notification from './Components/Notfications';
import SettingsHomePage from './Components/SettingsHomePage';
import RenderStates from './Components/DeviceStatics/RenderStates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Device, useDevices } from '../../api/GetDevices';

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);


  const { data: devices, isLoading, isError, refetch } = useDevices();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  return (
    <ScrollView
      style={{ flexGrow: 1 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header />
      <Text style={styles.Title}> Devices</Text>
      <View style={styles.UnderHeader}>
        <Devices devices={devices} />
        <AddDevice />
        <Text style={styles.Title}> Notifications</Text>
        <Notification />
        <SettingsHomePage />
        <RenderStates data={devices} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  UnderHeader: {
    // Remove the marginBottom style
  },
  Title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomePage;
