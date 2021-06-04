import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../utils/colors';

const PersonalTicketsScreen = props => {
    return (<View style={styles.container}>
        <Text style={styles.fallbackTxt}>You have not bought tickets yet!</Text>
    </View>)
};

export default PersonalTicketsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    fallbackTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        textAlign: 'center'
    },
});