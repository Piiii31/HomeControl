import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';
import { register } from '../../api/Loginauth';  // import the new API function
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const response = await register(username, email, password);  // include username
        if (response && response.status === 'ok') { // Add null check for response
            navigation.navigate('HomePage' as never);
        } else {
            alert("Registration failed");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.allheader}>
                <Text style={styles.header}>Smart Home Control</Text>
                <Text style={styles.underheader}>Control and manage your smart home devices with ease</Text>
            </View>
            <Text style={styles.login}>Sign Up</Text>
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
                <Text style={styles.Text}>Email</Text>
                <View style={styles.input}>
                    <AndDesign name="mail" size={20} color="#000" />
                    <TextInput
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <Text style={styles.Text}>Password</Text>
                <View style={styles.input}>
                    <AndDesign name="lock" size={20} color="#000" />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Text style={styles.Text}>Confirm Password</Text>
                <View style={styles.input}>
                    <AndDesign name="lock" size={20} color="#000" />
                    <TextInput
                        placeholder="Confirm your password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>
                <TouchableOpacity onPress={handleSignUp}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.Textlogin}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
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
        lineHeight: 42,
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
});

export default SignUp;
