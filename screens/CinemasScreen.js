import React, {useEffect, useState, useCallback} from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import CinemaCard from '../components/cinema_card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCinemas, updateSelectedCinema } from '../store/slice/cinema_slice';

const CinemasScreen = props => {

    const cinemas = useSelector(state => state.cinema.cinemas);
    const selectedCinema = useSelector(state => state.cinema.selectedCinema);
    const [selectedId, setSelectedId] = useState();

    const dispatch = useDispatch();


    useEffect(() => {
        if(selectedId){
            dispatch(updateSelectedCinema(selectedId));
        }
        
    },[selectedId, updateSelectedCinema]);

    return (
        <View style={styles.mainContainer}>
            <FlatList contentContainerStyle={styles.list}
                data={cinemas}
                renderItem={(itemData) => <CinemaCard
                    name={itemData.item.name}
                    address={itemData.item.address}
                    openings={itemData.item.openings}
                    roomsNumber={itemData.item.roomsNumber}
                    selected = {(selectedCinema && selectedCinema.id === itemData.item.id) ? true : false}
                    onClick={() => {
                        if(itemData.item.id === selectedId){
                            setSelectedId(-1);
                        }
                        else{
                            setSelectedId(itemData.item.id);
                        }
                    }} />}
                keyExtractor={item => item.id} />
        </View>
    )
};

export default CinemasScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        flexGrow: 1,
        backgroundColor: 'white'
    }
});