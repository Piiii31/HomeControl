import { View, Text,StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Notfications = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
           <Text>+</Text>
           <View>
            <Text>Device</Text>
            <Text>Stay informed about</Text>
           </View>
           <TouchableOpacity>
               <Text>View All</Text>
              </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e89434',
            borderRadius: 25,
            padding: 20,
            margin: 20,
        },
        card: {
            flexDirection: 'row',
            backgroundColor: '#e89434',
            rowGap: 30,
        
            
        },
    
    })
export default Notfications