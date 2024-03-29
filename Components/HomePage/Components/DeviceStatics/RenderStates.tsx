import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductState from './ProductState';
import { Device } from '../../../../api/GetDevices';
import axios from 'axios';
import { useQuery } from 'react-query';
import { fetchPowerColumn } from '../../../../api/RenderState';

interface DevicesProps {
  devices: Device[];
}
export interface RenderStatesProps {
  data: Device[];
}




const ItemComponent: React.FC<{ item: Device }> = ({ item }) => {
 
  
  const { data: state = '', refetch } = useQuery(['powerColumn', item.user_id, item.id], () => fetchPowerColumn(item.user_id, item.id), {
    initialData: '',
    
    
    
     // Refetch the data every 5 seconds
});
  const imageForState0 = require('../../../../assets/red.png'); // Replace with your actual image path
  const imageForOtherState = require('../../../../assets/green.png'); // Replace with your actual image path

  const imageSource = state === 0 ? imageForState0 : imageForOtherState;

    console.log('state', state);

    // Replace with your actual component
    return <ProductState  device={item} deviceName={item.name} state={imageSource} />;
};

const RenderStates: React.FC<RenderStatesProps> = ({ data }) => {
  return (
    <View>
      <Text style={styles.title}>Device Statistics</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent item={item} />}
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
