import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Header from './Components/Header'
import Devices from './Components/Devices'
import AddDevice from './Components/AddDevice'
import Notification from './Components/Notfications'
import SettingsHomePage from './Components/SettingsHomePage'
import RenderStates from './Components/DeviceStatics/RenderStates'


const HomePage = () => {
  return (
    <ScrollView style={{flexGrow:1}} >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header />
      <Text style={styles.Title}> Devices</Text>
      <View style={styles.UnderHeader}>
        <Devices />
        <AddDevice />
        <Text style={styles.Title}> Notfications</Text>
        <Notification/>
        <SettingsHomePage/>
        <RenderStates/>
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

export default HomePage