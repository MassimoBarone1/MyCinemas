import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ShowCard from '../components/show_card';

const CinemaShowsScreen = props => {

    const selectedRoom = useSelector(state => state.cinema.selectedRoom);
    const dispatch = useDispatch();

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedRoom.name ? selectedRoom.name : 'Choose a Show'
        });
    });


    return (
        <View style={styles.container}>
            {selectedRoom.name ? <FlatList
            contentContainerStyle={{ flexGrow: 1,}}
            keyExtractor={item => item.id}
            data={selectedRoom.shows}
            renderItem={itemData => 
            <ShowCard
            showName={itemData.item.name}
            showDate={itemData.item.date}
            showPlaces={itemData.item.remainingPlaces} />} />: <View style={{alignItems: 'center'}}><Text style={styles.fallbackTxt}>You have not chosen a room yet!</Text></View>}
            
        </View>
    )
};

export default CinemaShowsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    fallbackTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        textAlign: 'center'
    }
});