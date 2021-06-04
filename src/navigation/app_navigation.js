import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CinemasScreen from '../screens/CinemasScreen';
import CinemaBookingScreen from '../screens/CinemaBookingScreen';
import CinemaRoomsScreen from '../screens/CinemaRoomsScreen';
import CinemaShowsScreen from '../screens/CinemaShowsScreen';
import AddCinemaScreen from '../screens/AddCinemaScreen';
import { Platform } from 'react-native';
import Colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const commonStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.orange : Colors.white
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.orange,
    headerTitleStyle: {
        fontFamily: 'Montserrat-Bold'
    }
};


// Cinema Stack
const CinemaStackNavigator = createStackNavigator();
export const CinemasNavigator = () => {
    return (
        <CinemaStackNavigator.Navigator
            screenOptions={commonStackOptions}>
            <CinemaStackNavigator.Screen
                name="Cinemas"
                component={CinemasScreen}
                options={({navigation, route}) => ({
                    title: 'Discover Cinemas',
                    headerRight: () => (<Ionicons name="add" color={Platform.OS === 'android' ? Colors.white : Colors.orange} style={{padding: 8}} size={24} onPress={() => {
                        navigation.navigate("AddCinema");
                    }}/>)
                })} />
                <CinemaStackNavigator.Screen
                name="AddCinema"
                component={AddCinemaScreen}
                options={{
                    title: 'Add Cinema'
                }}/>
        </CinemaStackNavigator.Navigator>
    );
}

// Cinema Rooms
const CinemaRoomsStackNavigator = createStackNavigator();
export const CinemaRoomsNavigator = () => {
    return (
        <CinemaRoomsStackNavigator.Navigator
            screenOptions={commonStackOptions}>
            <CinemaRoomsStackNavigator.Screen
                name="CinemaRooms"
                component={CinemaRoomsScreen}
                options={{
                    title: 'Choose a Room'
                }} />
        </CinemaRoomsStackNavigator.Navigator>
    );
}

// Cinema Shows
const CinemaShowsStackNavigator = createStackNavigator();
export const CinemaShowsNavigator = () => {
    return (
        <CinemaShowsStackNavigator.Navigator
            screenOptions={commonStackOptions}>
            <CinemaShowsStackNavigator.Screen
                name="CinemaShows"
                component={CinemaShowsScreen}
                options={{
                    title: 'Choose a Show'
                }} />
        </CinemaShowsStackNavigator.Navigator>
    );
}

// Cinema Stack
const CinemaBookingStackNavigator = createStackNavigator();
export const CinemaBookingNavigator = () => {
    return (
        <CinemaBookingStackNavigator.Navigator
            screenOptions={commonStackOptions}>
            <CinemaBookingStackNavigator.Screen
                name="CinemaBooking"
                component={CinemaBookingScreen}
                options={{
                    title: 'Buy a Ticket'
                }} />
        </CinemaBookingStackNavigator.Navigator>
    );
}

// Bottom navigation
const AppBottomTabNavigator = createBottomTabNavigator();
export const AppBottomNavigator = () => {
    return (
        <AppBottomTabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: '#ffa500'
            }}>
            <AppBottomTabNavigator.Screen
                name="List"
                component={CinemasNavigator}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='search' color={color} size={size} />;
                    },
                }} />
            <AppBottomTabNavigator.Screen
                name="Rooms"
                component={CinemaRoomsNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='albums' color={color} size={size} />;
                    }
                }} />
            <AppBottomTabNavigator.Screen
                name="Shows"
                component={CinemaShowsNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='film' color={color} size={size} />;
                    }
                }} />
            <AppBottomTabNavigator.Screen
                name="Book"
                component={CinemaBookingNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='book' color={color} size={size} />;
                    }
                }} />
        </AppBottomTabNavigator.Navigator>
    );
};