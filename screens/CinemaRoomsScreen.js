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
            title: selectedCinema.name
        });
    },[selectedCinema]);


    return (
        <View style={styles.container}>
            <FlatList
            numColumns={2}
            contentContainerStyle={{flexGrow: 1}}
            data={selectedCinema.rooms}
            keyExtractor={item => item.id}
            renderItem={itemData => <CinemaRoomRowCard
            roomName={itemData.item.name}
            roomSeats={itemData.item.seats}
            show1={itemData.item.show1}/>}/>
        </View>
    )
};

export default CinemaRoomsScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white
    }
});