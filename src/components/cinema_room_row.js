import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Colors from '../utils/colors';

const formatDate = (date) => {
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return day + "-" + month + "-" + year + " " + " alle " + hours + ":" + minutes;
}

const CinemaRoomRow = props => {

    return (<View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.labelContainer}>Sala: <Text style={styles.value}>{props.name}</Text></Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>Posti a sedere: <Text style={styles.value}>{props.numOfSeats}</Text></Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>Spettacoli:</Text>
        {props.shows.map(show => <Text key={show.id} style={{...styles.value, paddingTop: 4, }}>{show.name} il {show.date}</Text>)}
        </ScrollView>
    </View>)
};

export default CinemaRoomRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.3,
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
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: Colors.orange
    },
    value: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: Colors.black
    },
});