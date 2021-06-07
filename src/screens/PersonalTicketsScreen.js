import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import { useSelector } from 'react-redux';
import TicketCard from '../components/ticket_card';

const PersonalTicketsScreen = props => {

    const userTickets = useSelector(state => state.cinema.showTickets);
    const roomName = useSelector(state => state.cinema.selectedRoom.name);

    return (<View style={styles.container}>
        {userTickets.length > 0 ? <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                keyExtractor={item => item.id}
                data={userTickets}
                renderItem={(itemData) => <TicketCard
                    showName={itemData.item.showName}
                    showDate={itemData.item.showDate}
                    showRoom={roomName}
                    price={itemData.item.ticketTotPrice}
                    qty={itemData.item.ticketQty} />} />
        </View> : <Text style={styles.fallbackTxt}>You have not bought tickets yet!</Text>}

    </View>)
};

export default PersonalTicketsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    fallbackTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        textAlign: 'center'
    },
});