import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CinemaShowsScreen = props => {
    return (
        <View style={styles.container}>
            <Text>You have not chosen a room yet!</Text>
        </View>
    )
};

export default CinemaShowsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});