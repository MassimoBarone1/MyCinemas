import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CinemaRoomRowCard from '../components/cinema_room_row_card';
import Colors from '../utils/colors';

const CinemaRoomsScreen = props => {

    const selectedCinema = useSelector(state => state.cinema.selectedCinema);

    // Set header title
    useEffect(() => {
        props.navigation.setOptions({
            title: selectedCinema.name ? selectedCinema.name : 'Choose a Room'
        });
    },[selectedCinema]);


    return (
        <View style={styles.container}>
            {selectedCinema.name ? <FlatList
            numColumns={2}
            contentContainerStyle={{flexGrow: 1}}
            data={selectedCinema.rooms}
            keyExtractor={item => item.id}
            renderItem={itemData => <CinemaRoomRowCard
            roomName={itemData.item.name}
            roomSeats={itemData.item.seats}
            shows={itemData.item.shows}/>}/> : <View style={{alignItems: 'center'}}><Text style={styles.fallbackTxt}>No cinema selected!</Text></View>}
            
        </View>
    )
};

export default CinemaRoomsScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    fallbackTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        textAlign: 'center',
    }
});