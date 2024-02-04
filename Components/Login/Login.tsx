import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import AndDesign from 'react-native-vector-icons/AntDesign'
import HomePage from '../HomePage/HomePage'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Check if username and password are correct
        if (username === '' && password === '') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    if (isLoggedIn) {
        navigation.navigate('HomePage' as never);
        
    }

    return (
        <View style={styles.container} >
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
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View>
                    <View style={styles.password}>
                        <Text style={styles.Text}>Password</Text>
                        <Text style={styles.Text}>Forgot Your password?</Text>
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
                    <TouchableOpacity>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

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