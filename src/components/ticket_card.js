import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/colors';


const TicketCard = props => {
    return (
        <View style={styles.container}>
            <View style={styles.dividerView}>
                <View style={styles.mainInfo}>
                    <Text style={styles.qtyPrice}>x {props.qty}</Text>
                    <Text style={styles.qtyPrice}>{props.price}€</Text>
                </View>
                <View style={styles.ticketInfo}>
                    <Text style={styles.showName}>{props.showName}</Text>
                    <Text style={styles.showDate}>{props.showDate}</Text>
                    <Text style={styles.showRoom}>{props.showRoom}</Text>
                </View>
            </View>
        </View>)
};

export default TicketCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
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
    dividerView: {
        flexDirection: 'row',
        height: '100%'
    },
    mainInfo: {
        backgroundColor: Colors.orange,
        width: '25%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'space-between',
        paddingLeft: 8,
        alignItems: 'center'
    },
    
    ticketInfo: {
        width: '75%',
        paddingLeft: 8,
        justifyContent: 'space-between',
    },
    qtyPrice: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: Colors.white
    },
    showName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: Colors.black
    },
    showDate: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: Colors.black
    },
    showRoom: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        color: Colors.black
    }
});