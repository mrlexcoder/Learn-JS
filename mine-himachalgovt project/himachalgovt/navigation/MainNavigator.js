import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import SettingsScreen from '../screens/HomeScreens/SettingsScreen';
import SidebarScreen1 from '../screens/SidebarScreens/SidebarScreen1';
import SidebarScreen2 from '../screens/SidebarScreens/SidebarScreen2';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="Sidebar1" component={SidebarScreen1} />
      <Drawer.Screen name="Sidebar2" component={SidebarScreen2} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
