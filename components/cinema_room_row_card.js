import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Colors from '../utils/colors';

const CinemaRoomRowCard = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground style={styles.bgImage} source={require('../assets/images/pattern.png')}>
                <View style={styles.innerImgContainer}>
            <View style={styles.titleContainer}><Text style={styles.roomName}>{props.roomName}</Text></View>
            <View style={styles.roomsContainer}><Text style={styles.roomSeats}>{props.roomSeats} Posti a sedere</Text></View>
            <View style={styles.showsContainer}>
                <Text style={styles.roomShows}>Spettacoli</Text>
                <Text style={styles.roomShowTxt}>{props.show1}</Text>
            </View>
            </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default CinemaRoomRowCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: '80%',
        height: 200,
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
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    roomName: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Montserrat-Bold'
    },
    roomSeats: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat-Medium'
    },
    roomShows: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat-Light'
    },
    titleContainer: {
        paddingTop: 12
    },
    roomsContainer: {
        paddingTop: 8
    },
    showsContainer: {
        paddingTop: 8,
        alignItems: 'center'
    },
    roomShowTxt: {
        paddingTop: 8,
        color: Colors.white,
        fontSize: 18,
        fontFamily: 'Montserrat-Light'
    },
    innerImgContainer: {
        flex: 1,
        backgroundColor: "#000000a0",
    }
});