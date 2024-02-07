import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ProductState from './ProductState'



interface ProductStateProps {
    imageName: string;
    deviceName: string;
    state: string;
  }
  
const data: ProductStateProps[] = [
    { imageName: 'Image1', deviceName: 'Device1', state: 'State1' },
    { imageName: 'Image2', deviceName: 'Device2', state: 'State2' },
    { imageName: 'Image3', deviceName: 'Device3', state: 'State3' },
    { imageName: 'Image4', deviceName: 'Device4', state: 'State4' },
    // Add more items as needed
];

const RenderStates: React.FC = () => {
  return (
    <View>
        <Text style={styles.title}>Device Statistics</Text>  
        <FlatList 
      data={data}
      keyExtractor={(item) => item.deviceName}
      renderItem={({ item }) => (
        <ProductState imageName={item.imageName} deviceName={item.deviceName} state={item.state} />
      )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        marginTop : 20,
        marginBottom : 20,
        marginLeft : 25,
        fontSize : 14,
        fontWeight : 'bold'
    }

})

export default RenderStates