import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://djangobackend-seven.vercel.app';  // replace with your Django server URL

interface RegisterResponse {
    status: string;
}

export interface LoginResponse {
    status: string;
    token: string;  // Add token property
    error?: string;
    user_id: number;
}

interface AddDeviceResponse {
    device_id: string;
    status: string;
    user_id: number;
}

let token: string | null = null; 
let userid : number | 0 = 0; // Add a variable to store the token

export async function register(username: string, email: string, password: string): Promise<RegisterResponse | undefined> {
    try {
        const response = await axios.post(`${API_URL}/register`, {username, email, password});
        const data: RegisterResponse = response.data;
        console.log('Response data:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function login(email: string, password: string): Promise<LoginResponse | undefined> {
    try {
        const response = await axios.post(`${API_URL}/login`, {email, password});
        const data: LoginResponse = response.data;
        console.log('Response data:', data);
        token = data.token;  // Store the token
        userid= data.user_id
        console.log('Token:', token);
        console.log('User ID:', userid);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userid', userid.toString());
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function addDevice(name: string, type: string, deviceLocation: string, receiveNotifications: boolean, image: string): Promise<AddDeviceResponse> {
    try {
        const response = await axios.post(`${API_URL}/add_device`, {name, type, deviceLocation, receiveNotifications, image}, {
            headers: {
                'Authorization': `Bearer ${token}`  // Include the token in the Authorization header
            }
        });
        const data: AddDeviceResponse = response.data;
        await AsyncStorage.setItem('device_id', data.device_id);
        await AsyncStorage.setItem('useridofdevice', data.user_id.toString());
        console.log('Response data:', data);
        return data;
    } catch (error: any) {  // Add type assertion to specify 'error' as 'any'
        console.error('HTTP error', error.response.status);
        console.error('Response data:', error.response.data);
        throw new Error(`HTTP error ${error.response.status}: ${error.response.data}`);
    }
}
