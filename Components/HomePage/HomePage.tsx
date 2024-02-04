import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from './Components/Header'
import Devices from './Components/Devices'
import AddDevice from './Components/AddDevice'
import Notification from './Components/Notfications'

const HomePage = () => {
  return (
    
      <View style={{flex:1}}>
      <Header />
      <Text style={styles.Title}> Devices</Text>
      <View style={styles.UnderHeader}>
      <Devices />
      <AddDevice />
      <Text style={styles.Title}> Notfications</Text>
      <Notification/>
      </View>
      

      </View>
    
  )
}

const styles = StyleSheet.create({
  UnderHeader : {
    marginBottom : 460,
  },
  Title:{
    marginTop : 20,
    marginBottom : 20,
    marginLeft : 20,
    fontSize : 17,
    fontWeight : 'bold'
  }
})
  

export default HomePage