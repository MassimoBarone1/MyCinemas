import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Colors from '../utils/colors';

const CinemaRoomRow = props => {

    return (<View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.labelContainer}>Sala: <Text style={styles.value}>{props.name}</Text></Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>Posti a sedere: <Text style={styles.value}>{props.numOfSeats}</Text></Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>Spettacoli:</Text>
        {props.shows.map(show => <Text style={{...styles.value, paddingTop: 4, }}>{show}</Text>)}
        </ScrollView>
    </View>)
};

export default CinemaRoomRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.2,
        elevation: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        borderRadius: 10,
        backgroundColor: Colors.white,
    },
    labelContainer: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: Colors.orange
    },
    value: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: Colors.black
    },
});