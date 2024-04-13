import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import ProfileInfoViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import SpaceScreen from '../../Space/SpaceScreen';
import ProfileInfoScreen from './ProfileInfo';
import { RootSatckParamList } from '../../../../../App';
import LoginScreen from '../../Login/LoginScreen';

// Define las pantallas para cada pestaña
const Tab = createBottomTabNavigator();

interface Props extends StackScreenProps<RootSatckParamList, 'Tabs'> {};

const ProfileTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'lightblue',
                tabBarInactiveBackgroundColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 16,
                },
                tabBarItemStyle: {
                    paddingVertical: 5,
                    borderRadius: 20,
                },
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    borderTopColor: 'gray',
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    right: 10,
                },
            }}
        >
            <Tab.Screen 
                name="Profile" 
                component={ProfileInfoScreen} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../../../assets/iconprofile.png') : require('../../../../../assets/iconprofile.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Space" 
                component={SpaceScreen} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../../../assets/iconlupa.png') : require('../../../../../assets/iconlupa.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
};

export default ProfileTabs;
