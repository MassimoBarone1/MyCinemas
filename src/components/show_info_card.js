import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../utils/colors';

const formatDate = (date) => {
    const splittedDate = date.split(" ");
    return splittedDate[0] + " alle ore " + splittedDate[1];

}

const ShowInfoCard = props => {
    return (<View style={styles.container}>
        <Text style={styles.labelContainer}>Lo Spettacolo si terrà nella sala: <Text style={styles.value}>{props.roomName}</Text></Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>{props.numOfSeats === 0 ? "Non sono disponibili posti" : "Sono disponibili ancora: "}<Text style={styles.value}>{props.numOfSeats}</Text>{props.numOfSeats > 1 ? " posti" : " posto"}</Text>
        <Text style={{...styles.labelContainer, paddingTop: 8}}>Lo spettacolo è previsto il <Text style={styles.value}>{formatDate(props.showDate)}</Text></Text>
        
    </View>)
};

export default ShowInfoCard;

const styles = StyleSheet.create({
   container: {
        padding: 20,
        width: Dimensions.get('window').width * 0.8,
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
        fontSize: 20,
        color: Colors.black,
        textAlign: 'center'
    },
    value: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        color: Colors.orange
    },
});