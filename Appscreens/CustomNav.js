import React from 'react';
import { Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logo from '../assets/logo.png';
import Signup from '../screen/Signup';
import Dashboard from '../screen/Dashboard';
import Inputreading from '../screen/Inputreading';
import History from '../screen/History'
import Leaderboard from '../screen/Leaderboard'
import Login from '../screen/Login';
import CustomDrawer from './components/CustomDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomNav = () => {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Signup" screenOptions={{
            drawerActiveBackgroundColor: '#445BCC',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
                marginLeft: -25,
                fontSize: 16,
            },
            headerStyle: {
                backgroundColor: '#1EB5C6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Drawer.Screen name='Signup' options={{
                headerShown: false, drawerItemStyle: {
                    display: "none",
                },
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                ),
            }} component={Signup} />
            
            <Drawer.Screen name='Login' options={{
                headerShown: false, drawerItemStyle: {
                    display: "none",
                },
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                ),
            }} component={Login} />

            <Drawer.Screen name='Dashboard' options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                ),
                headerRight: () => (
                    <Image
                        style={{ width: 50, height: 50, margin: 20 }}
                        source={Logo}
                    />
                ),
            }} component={Dashboard} />

            <Drawer.Screen name='Input Reading' options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="calculator" size={22} color={color} />
                ),
            }} component={Inputreading} />

            <Drawer.Screen name='History' options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="timer" size={22} color={color} />
                ),
            }} component={History} />

            <Drawer.Screen name='Leaderboard' options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="analytics" size={22} color={color} />
                ),
            }} component={Leaderboard} />
         </Drawer.Navigator>
    );
}


export default CustomNav;