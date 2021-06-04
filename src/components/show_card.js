import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../utils/colors';

const formatDate = (date) => {
    const splittedDate = date.split(" ");
    return "Lo spettacolo è previsto il " + splittedDate[0] + " alle ore " + splittedDate[1];

}

const ShowCard = props => {
    return (
    
    <TouchableOpacity style={styles.container}>
        <Text style={styles.showName}>{props.showName}</Text>
        <Text style={styles.showDate}>{formatDate(props.showDate)}</Text>
        <Text style={{...styles.showPlaces, color: props.showPlaces > 10 ? Colors.green : Colors.red}}>{props.showPlaces > 1 ? props.showPlaces + " Posti rimanenti" : props.showPlaces === 1 ? "1 Posto rimanente" : "Esaurito"}</Text>
    </TouchableOpacity>
    )
};

export default ShowCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.black,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowColor: Colors.black,
        elevation: 30,
        backgroundColor: Colors.white,
        padding: 12,
        marginVertical: 10,
        marginHorizontal: 30
    },
    showName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    showDate: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        textAlign: 'center'
    },
    showPlaces: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18
    }
});