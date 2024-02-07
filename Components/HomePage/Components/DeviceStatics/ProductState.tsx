import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface ProductStateProps {
  imageName: string;
  deviceName: string;
  state: string;
}

const ProductState: React.FC<ProductStateProps> = ({ imageName, deviceName, state }) => {
  return (
    <TouchableOpacity style={[styles.container, { margin: 10 }]} >
        <Text style={styles.image}>{imageName}</Text>
        <Text style={{color : 'white',fontSize:18,fontWeight:'bold',marginRight :80}}>{deviceName}</Text>
        <Text style={{color : 'white',fontSize:16}}>{state}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        gap: 40,
        backgroundColor: '#e89434',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
        marginStart: 10,
        width :350,
        height:64,
    },
    image :{
        backgroundColor : 'white',
        width : 40,
        height : 40,
        borderRadius : 50,
        textAlign : 'center',
        color : 'black',
        
        
    }
})

export default ProductState