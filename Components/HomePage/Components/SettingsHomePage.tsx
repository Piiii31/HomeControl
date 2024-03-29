import { View, Text,StyleSheet,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const SettingsHomePage = () => {

    const navigation = useNavigation();

    const GoTv = () => {
        (navigation.navigate as any)('VideoESPFull');
    };
    const navigateweb = () => {
        const url = 'https://192.168.4.1';
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log(`Don't know how to open URL: ${url}`);
          }
        });
      };
    return (
        <View>

            <Text style={styles.title}>Settings</Text>
            <View style={styles.borders}>
            <TouchableOpacity style={styles.settingDevice} onPress={GoTv}>
                <Text style={{color:'white',fontSize :18,fontWeight :'bold'}}>Camera</Text>
                <FontAwesome6 name="house-laptop" size={30} color="white" />

            </TouchableOpacity>
            <TouchableOpacity style={styles.notfication} onPress={navigateweb}>
            <Text style={{color:'white',fontSize :18,fontWeight :'bold'}}>Connect</Text>
            <Icon name="wifi" size={30} color="white" />

            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title :{
        marginTop : 20,
        marginBottom : 20,
        marginLeft : 25,
        fontSize : 17,
        fontWeight : 'bold'
    },
    settingDevice : {
        gap: 30,
        flexDirection: 'column',
        backgroundColor: '#e89434',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        width: 160,

    },
    notfication : {
        gap: 30,
        flexDirection: 'column',
        backgroundColor: '#e89434',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        width: 160,
    },
    borders : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        gap: 10,
    }
      
    })


export default SettingsHomePage