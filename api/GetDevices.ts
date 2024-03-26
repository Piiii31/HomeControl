import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export interface Device {
    id: string;
    name: string;
    type: string;
    user_id: string;
    deviceLocation: string;
    receiveNotifications: boolean;
    image: string;
    // Add more properties as needed
}
export const getDevices = async (): Promise<Device[]> => {
    // Retrieve the user id and token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userid');

    const response = await axios.get(`https://djangobackend-seven.vercel.app/get-devices/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data.devices.map((device: any) => ({
        id: device.id,
        name: device.name,
        type: device.type,
        user_id: device.user_id,
        deviceLocation: device.deviceLocation,
        receiveNotifications: device.receiveNotifications,
        image: device.image
    }));
};

export const useDevices = () => {
    // Retrieve the user id from AsyncStorage
    const userId = AsyncStorage.getItem('userid');

    return useQuery({
        queryKey: ['devices', userId],
        queryFn: getDevices,
        initialData: [] // Add initialData property with an empty array
    });
};