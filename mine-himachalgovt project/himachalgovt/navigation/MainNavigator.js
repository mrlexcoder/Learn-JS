import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import SettingsScreen from '../screens/HomeScreens/SettingsScreen';
import SidebarScreen1 from '../screens/SidebarScreens/SidebarScreen1';
import SidebarScreen2 from '../screens/SidebarScreens/SidebarScreen2';
import PostDetailsScreen from '../screens/HomeScreens/PostDetailsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.userIcon} />
        <Text style={styles.userName}>John Doe</Text>
        <View style={styles.iconsContainer}>
          <Icon name="search" size={24} color="#fff" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// const CustomDrawerContents = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };
const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.userIcon} />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


function MainNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} 
 
    />}
    screenOptions={{
      header: () => <CustomHeader />,
    }}
    
    >
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="Sidebar1" component={SidebarScreen1} />
      <Drawer.Screen name="Sidebar2" component={SidebarScreen2} />
      <Drawer.Screen name="PostDetails" component={PostDetailsScreen} />

    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AF87FE',
    padding: 15,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop:30
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  userName: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default MainNavigator;
