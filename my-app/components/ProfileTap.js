import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Health from './Health';
import BMI from './BMI';

export default function ProfileTap({ route }) {
    const { student } = route.params;
    const Tap = createBottomTabNavigator();
    return (
        <Tap.Navigator initialRouteName='Profile'>
            <Tap.Screen name="Profile" component={Profile} initialParams={{ student }} />
            <Tap.Screen name="Health" component={Health} initialParams={{ student }} />
            <Tap.Screen name="BMI" component={BMI} initialParams={{ student }} />
        </Tap.Navigator>
    )
}
