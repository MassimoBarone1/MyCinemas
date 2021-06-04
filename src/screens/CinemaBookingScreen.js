import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../utils/colors';
import ShowInfoCard from '../components/show_info_card';

const CinemaBookingScreen = props => {

    const selectedShow = useSelector(state => state.cinema.selectedShow);
    const selectedRoom = useRef(useSelector(state => state.cinema.selectedRoom));

    return (
        <View style={styles.container}>
            {selectedShow.name ?
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.txtContainer}>
                        <Text style={styles.header}>Acquista il Biglietto Per il Film</Text>
                        <View style={styles.mainShowContainer}>
                            <View style={styles.showContainer}>
                                <Text style={styles.title}>{selectedShow.name}</Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <ShowInfoCard
                                roomName={selectedRoom.current.name}
                                numOfSeats={40}
                                showDate={selectedShow.date} />
                        </View>
                    </View>
                </ScrollView>
                : <View style={styles.fallbackContainer}>
                    <Text style={styles.fallbackTxt}>No Tickets Found!</Text>
                </View>}
        </View>

    )
};

export default CinemaBookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    header: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        textAlign: 'center'
    },
    titleDate: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 24,
        marginTop: 8,
        marginHorizontal: 12
    },
    txtContainer: {
        marginTop: 8,
        flex: 1,
    },
    mainShowContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    showContainer: {
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 10,
        borderColor: Colors.orange,
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 8,
        color: Colors.orange
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        textAlign: 'center'
    }
});