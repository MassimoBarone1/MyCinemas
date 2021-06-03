import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CinemaBookingScreen = props => {
    return (
        <View style={styles.container}>
            <Text>No Tickets Found!</Text>
        </View>
    )
};

export default CinemaBookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});