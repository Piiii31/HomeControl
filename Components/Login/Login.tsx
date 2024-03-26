import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../api/Loginauth';  // import the new API function
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    

    const handleLogin = async () => {
        const response = await login(email, password);  // use email instead of username
        if (response && response.status === 'ok') { // Add null check for response
            await AsyncStorage.setItem('user', JSON.stringify(response));
            navigation.navigate('HomePage' as never);
        } else {
            console.error('Login failed');
        }
    };
    const handleSignUp = () => {
        navigation.navigate('SignUp' as never);
    }

    return (
        <View style={styles.container}>
            <View style={styles.allheader}>
                <Text style={styles.header}>Smart Home Control</Text>
                <Text style={styles.underheader}>Control and manage your smart home devices with ease</Text>
            </View>
            <Text style={styles.login}>Log in</Text>
            <View>
                <Text style={styles.Text}>Username</Text>
                <View style={styles.input}>
                    <AndDesign name="user" size={20} color="#000" />
                    <TextInput
                        placeholder="Enter your username"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <View style={styles.password}>
                        <Text style={styles.Text}>Password</Text>
                       
                    </View>
                    <View style={styles.input}>
                        <AndDesign name="lock" size={20} color="#000" />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={handleLogin}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.Textlogin}>Log in</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.noaccount}>
                    <Text style={{ color: "grey" }}>Don't have an account? </Text>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Add your styles here
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    allheader: {
        alignItems: 'center',
        justifyContent: 'center',


    },
    header: {
        marginTop: 100,
        fontSize: 24,
        fontWeight: 'bold',
    },

    underheader: {
        fontSize: 12,
        fontWeight: 'normal',
    },
    login: {
        marginLeft: 20,
        marginTop: 84,
        color: '#030303',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 42
    },

    input: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,

    },
    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Text: {
        marginTop: 30,
        width: 100,
        marginLeft: 20,
        marginEnd: 20,
        color: 'grey',
    },
    loginbutton: {
        backgroundColor: '#e89434',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        padding: 17,
        borderRadius: 20,
        alignItems: 'center',
    },
    Textlogin: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    noaccount: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        gap: 50,
    },


})


export default Login