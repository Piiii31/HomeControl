import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import AddNewDevice from './Components/Form/AddNewDevice';
import VideoESP from './Components/ESPCamera/VideoESP';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUp from './Components/SignUp/SignUp';
import ConnectWifi from './Components/Form/ConnectWifi';
import IRCodeDetails from './Components/FetchIrcodes/IRCodeDetails';
import VideoESPFull from './Components/ESPCamera/VideoEspFull';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceDetails from './Components/DeviceDetails/DeviceDetails';


const Stack = createStackNavigator();

function App() {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const queryClient = new QueryClient(); // Create a new instance of QueryClient

  useEffect(() => {
    // Check if it's the first time the app is being opened
    AsyncStorage.getItem('isFirstTime').then(value => {
      if (value === null) {
        // First time opening the app
        AsyncStorage.setItem('isFirstTime', 'true');
        setIsFirstTime(true);
      }
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={isFirstTime ? "HomePage" : "WelcomePage"}
            screenOptions={{
              cardStyle: { backgroundColor: '#ffffff' },
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          >
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="IRCodeDetails" component={IRCodeDetails} />
            <Stack.Screen name="AddNewDevice" component={AddNewDevice} options={{ headerShown: true, title: ' New Device' }} />
            <Stack.Screen name="ConnectWifi" component={ConnectWifi} options={{ headerShown: false }} />
            <Stack.Screen name="VideoESP" component={VideoESP} options={{ headerShown: true }} />
            <Stack.Screen name="VideoESPFull" component={VideoESPFull} options={{ headerShown: false }} />
            <Stack.Screen name="DeviceDetails" component={DeviceDetails} options={{headerShown:true}} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;