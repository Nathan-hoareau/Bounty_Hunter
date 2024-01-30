import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import CompanyScreen from './Screen/CompanyScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './Screen/ProfileScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIconStyle: {display:'none'}}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, tabBarIconStyle: {display:'none'}}}/>
        <Tab.Screen name="Company" component={CompanyScreen} options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
