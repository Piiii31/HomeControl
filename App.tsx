import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{cardStyle :{backgroundColor : '#ffffff'}}}>
        <Stack.Screen name="Home" component={WelcomePage}  options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
