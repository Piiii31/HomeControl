import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

interface ProductStateProps {
  device:any
  deviceName: string;
  state: any;
}

const ProductState: React.FC<ProductStateProps> = ({  device,deviceName, state }) => {
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DeviceDetails', { device });
  };


  return (
    <View style={[styles.container, { margin: 10 }]} >
        <Image source={state} style={styles.image} />
        <Text style={{color : 'white',fontSize:18,fontWeight:'bold',marginRight :80}}>{deviceName}</Text>
        <TouchableOpacity onPress={handlePress}>
        <Icon name="infocirlceo" size={30} color="white" />
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        
        backgroundColor: '#e89434',
        borderRadius: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
        
        
        
    }
})

export default ProductState