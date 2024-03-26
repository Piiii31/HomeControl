import React, { useEffect, useState } from 'react';
import { View, Text, Button,StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';
import VideoESP from '../ESPCamera/VideoESP';
import axios from 'axios';

const IRCodeDetails = ({ route }: { route: any }) => {
    const { device } = route.params;
    const [irCodes, setIRCodes] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIRCodes = async () => {
            try {
                const response = await fetch(`https://djangobackend-seven.vercel.app/fetch-ir-codes/${device.id}/`);
                const data = await response.json();
                console.log('IR codes:', data.ir_codes);
                setIRCodes(data.ir_codes);
            } catch (error) {
                console.error('Error fetching IR codes:', error);
            }
        };

        fetchIRCodes();
    }, [device]);



    const sendIRCode = async (code: number, irCodeId: number) => {
        try {
            // Send the IR code to the ESP32-CAM
            

                        const response = await fetch(`https://1a0a-196-235-211-66.ngrok-free.app/send-ir`, {
                        method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                            },
                        body: JSON.stringify({ code }),
                    })
    
            if (!response.ok) {
                throw new Error(`Failed to send IR code: ${response.status} - ${response.statusText}`);
            }
    
            // Update the clicked column for the specific IR code in the database
            const updateResponse = await fetch(`https://djangobackend-seven.vercel.app/fetch-ir-codes/${device.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ir_code_id: irCodeId }), // Include the ir_code_id
            });
    
            if (!updateResponse.ok) {
                throw new Error(`Failed to update IR code clicked status: ${updateResponse.status} - ${updateResponse.statusText}`);
            }
    
            console.log('IR code sent successfully to ESP32-CAM and clicked status updated in the database.');
        } catch (error: any) {
            console.error('Error sending IR code:', error);
            setError(`Error sending IR code: ${error.message}`);
        }
    };

    const handlePower = () => {
        sendIRCode(irCodes[0]?.code, irCodes[0]?.id);
    };

    const handleMute = () => {
        sendIRCode(irCodes[1]?.code, irCodes[1]?.id);
    };

    const handleVolumeUp = () => {
        sendIRCode(irCodes[2]?.code, irCodes[2]?.id);
    };

    const handleVolumeDown = () => {
        sendIRCode(irCodes[3]?.code, irCodes[3]?.id);
    };

    return (
        <View style={style.container}>
            <VideoESP />
         <View style={style.stylename} >
            <Text style={style.deviceName}>Device: </Text>
            <Text>{device.name}</Text>
         
        </View>   
        
        <View style={style.container1}>
            <View style={style.VolumeContainer}>
            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={handleVolumeUp}>
                    <AndDesign name="plus" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={handleVolumeDown}>
                    <AndDesign name="minus" size={40} color="white" />
                </TouchableOpacity>
            </View>
            </View>
            
            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={handlePower}>
                    <AndDesign name="poweroff" size={40} color="white" />
                </TouchableOpacity>
            </View>
            
            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={handleMute}>
                    <AndDesign name="sound" size={40} color="white"  />
                </TouchableOpacity>
            </View>
            <View/>

           

        </View>
        </View>
    );
}

const style = StyleSheet.create({
    container1: {
        marginLeft: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonContainer: {
        backgroundColor: '#e89434',
        borderRadius: 50,
        padding: 10,
        
        margin: 10,
    },
    VolumeContainer: {
        flexDirection: 'column',
    },
    deviceName: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    stylename: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        
        
    },

});

export default IRCodeDetails;

