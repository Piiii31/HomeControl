
import WelcomePage from './Components/WelcomePage/WelcomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import AddNewDevice from './Components/Form/AddNewDevice';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          cardStyle: { backgroundColor: '#ffffff' },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="Home" component={WelcomePage} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="AddNewDevice" component={AddNewDevice} options={{ headerShown: true, title: ' New Device' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
