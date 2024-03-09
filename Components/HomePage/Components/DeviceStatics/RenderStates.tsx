import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ProductState from './ProductState';
import { Device } from '../../../../api/GetDevices';

interface DevicesProps {
  devices: Device[];
}
export interface RenderStatesProps {
  data: Device[];
}



const RenderStates: React.FC<RenderStatesProps> = ({ data }) => {
  return (
    <View>
      <Text style={styles.title}>Device Statistics</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductState imageName={item.name} deviceName={item.name} state={item.type} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default RenderStates;
