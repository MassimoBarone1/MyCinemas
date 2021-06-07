import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemaRoomRowCard from '../components/cinema_room_row_card';
import Colors from '../utils/colors';
import {updateSelectedRoom} from '../store/slice/cinema_slice';

const CinemaRoomsScreen = props => {

    const selectedCinema = useSelector(state => state.cinema.selectedCinema);
    const selectedRoom = useSelector(state => state.cinema.selectedRoom);
    const [selectedId, setSelectedId] = useState();
    const dispatch = useDispatch();

    // Set header title
    useEffect(() => {
        props.navigation.setOptions({
            title: selectedCinema.name ? selectedCinema.name : 'Scegli una sala'
        });
    },[selectedCinema]);

    

    useEffect(() => {
        if(selectedId){
            dispatch(updateSelectedRoom(selectedId));
        }
        
    },[selectedId, updateSelectedRoom]);

    return (
        <View style={styles.container}>
            {selectedCinema.name ? <FlatList
            
            contentContainerStyle={{flexGrow: 1}}
            data={selectedCinema.rooms}
            keyExtractor={item => item.id}
            renderItem={itemData => <CinemaRoomRowCard
            roomName={itemData.item.name}
            roomSeats={itemData.item.seats}
            shows={itemData.item.shows}
            onClick={() => {
                
                if(itemData.item.id === selectedId){
                    setSelectedId(-1);
                }
                else{
                    setSelectedId(itemData.item.id);
                }
            }}
            selected={(selectedRoom && selectedRoom.id === itemData.item.id) ? true : false}/>}
           /> : <View style={{alignItems: 'center'}}><Text style={styles.fallbackTxt}>Nessun cinema selezionato!</Text></View>}
            
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