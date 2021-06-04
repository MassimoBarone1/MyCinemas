import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ShowCard from '../components/show_card';
import { updateSelectedShow} from '../store/slice/cinema_slice';

const CinemaShowsScreen = props => {

    const selectedRoom = useSelector(state => state.cinema.selectedRoom);
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState(-1);

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedRoom.name ? selectedRoom.name : 'Choose a Show'
        });
    });


    useEffect(() => {
        if(selectedId !== -1){
            
            dispatch(updateSelectedShow(selectedId));
        }
    },[selectedId, updateSelectedShow]);
    


    return (
        <View style={styles.container}>
            {selectedRoom.name ? <FlatList
            contentContainerStyle={{ flexGrow: 1,}}
            keyExtractor={item => item.id}
            data={selectedRoom.shows}
            renderItem={itemData => 
            <ShowCard
            selected={itemData.item.id === selectedId}
            onClick={() => {
                
                if(itemData.item.id === selectedId){
                    setSelectedId(-1);
                }
                else{
                    setSelectedId(itemData.item.id);
                }
                
            }}
            showName={itemData.item.name}
            showDate={itemData.item.date}
            showPlaces={itemData.item.remainingPlaces} />} />: <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}><Text style={styles.fallbackTxt}>You have not chosen a room yet!</Text></View>}
            
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