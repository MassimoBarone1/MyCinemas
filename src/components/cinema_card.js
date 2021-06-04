import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../utils/colors';

const CinemaCard = props => {
    return (
        <TouchableOpacity style={{...styles.container, borderColor: props.selected ? Colors.orange: Colors.black}} onPress={props.onClick}>
            <View style={styles.info}>
                <View>
                    <Text style={styles.nameTxt}>{props.name}</Text>
                    <Text style={styles.addressTxt}>{props.address}</Text>
                    <Text style={styles.openingsTxt}>Orari di apertura: {props.openings}</Text>
                </View>
                <View style={styles.roomsInfo}>
                    <Text style={styles.roomsTxt}>{props.roomsNumber}</Text>
                    <View style={styles.text}><Text style={styles.roomsTxt}>{props.roomsNumber > 1 ? "Sale" : "Sala" }</Text></View>
                </View>
            </View>
        </TouchableOpacity>);
};

export default CinemaCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        elevation: 30,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: 'white',
        margin: 15
    },

    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    roomsInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    nameTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    addressTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18
    },
    openingsTxt: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16
    },
    roomsTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18
    }
});