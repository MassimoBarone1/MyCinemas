import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/colors';
import {useSelector} from 'react-redux';

const TabIcon = props => {
    let txtToDisplay = "";
    
    if(props.type === "ALBUMS"){
        const selectedCinema = useSelector(state => state.cinema.selectedCinema);
        if(selectedCinema && selectedCinema.rooms && selectedCinema.rooms.length > 0){
            txtToDisplay = selectedCinema.rooms.length;
        }
    }
    else if(props.type === "FILM"){
        const selectedRoom = useSelector(state => state.cinema.selectedRoom);
        if(selectedRoom && selectedRoom.shows && selectedRoom.shows.length > 0){
            txtToDisplay = selectedRoom.shows.length;
        }
    }


    return (
        <View>
            <Ionicons name={props.name} color={props.color} size={props.size} />
            {txtToDisplay !== "" ? <View style={styles.badgeCounter}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.txt}>{txtToDisplay}</Text>
                </View>
            </View> : <View />}
            
        </View>
    );
};

export default TabIcon;

const styles = StyleSheet.create({
    badgeCounter: {
        width: 15,
        height: 15,
        position: 'absolute',
        borderRadius: 15,
        backgroundColor: Colors.orange,
        left: 15,
        justifyContent: 'center'
    },
    txt: {
        color: Colors.white,
        fontFamily: 'Montserrat-Medium',
    }
});