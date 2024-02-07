import { View, Text,StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Notfications = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.image}>I</Text>
        
          
          <View style={styles.text}>
          <Text style={{color : 'white',fontSize :15,fontWeight:'bold'}}>Device</Text>
            <Text style={{color : 'white',fontSize :14}}>Stay informed about</Text>
          
           
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{color : 'white'}}>Settings</Text>
        </TouchableOpacity>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignContent :'space-between',
        flexDirection: 'row',
        gap: 35,
        backgroundColor: '#e89434',
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
        marginStart: 20,
    },
    text: {
        flexDirection: 'column',
        gap: 10,
        color: 'white',
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
        marginRight: 26,
    },
    image :{
        backgroundColor : 'white',
        width : 25,
        height : 25,
        borderRadius : 50,
        textAlign : 'center',
        color : 'black',
        marginLeft : 20,
        marginBottom : 20,
        
    }
    
    
    })
export default Notfications