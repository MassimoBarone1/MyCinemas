import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { buyTicket } from '../store/slice/cinema_slice';
import Colors from '../utils/colors';
import ShowInfoCard from '../components/show_info_card';
import RoundedButton from '../components/rounded_button';
import CircularButton from '../components/circular_button';
import uuid from 'react-native-uuid';

const CinemaBookingScreen = props => {

    const selectedShow = useSelector(state => state.cinema.selectedShow);
    const selectedRoom = useRef(useSelector(state => state.cinema.selectedRoom));
    const [ticketQty, setTicketQty] = useState(1);
    const [ticketTotPrice, setTicketTotPrice] = useState(selectedShow.price);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {selectedShow.name ?
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.txtContainer}>
                        <View>
                            <Text style={styles.header}>Acquista il Biglietto Per il Film</Text>
                            <View style={styles.mainShowContainer}>
                                <View style={styles.showContainer}>
                                    <Text style={styles.title}>{selectedShow.name}</Text>
                                </View>
                            </View>
                            <View style={styles.cardContainer}>
                                <ShowInfoCard
                                    roomName={selectedRoom.current.name}
                                    numOfSeats={selectedShow.remainingPlaces}
                                    showDate={selectedShow.date} />
                            </View>
                            <View style={{ paddingTop: 24 }}>
                                <Text style={styles.ticketLabel}>Scegli il numero di biglietti</Text>
                            </View>
                            <View style={styles.quantityContainer}>
                                <CircularButton
                                    onClick={() => {
                                        if (ticketQty === 1) {
                                            Alert.alert("Operazione Negata!", "Non puoi rimuovere ancora!", [{ text: 'Ok' }]);
                                        }
                                        else {
                                            const qty = ticketQty - 1;
                                            setTicketQty(qty);
                                            setTicketTotPrice(qty * selectedShow.price);
                                        }

                                    }}
                                    icon="cart-outline"
                                    btnStyles={{ width: 60, height: 60, borderRadius: 60, marginRight: 12 }} />
                                <View style={styles.qtyValueContainer}>
                                    <Text style={styles.title}>{ticketQty}</Text>
                                </View>
                                <CircularButton
                                    onClick={() => {
                                        if (ticketQty < selectedShow.remainingPlaces) {
                                            const qty = ticketQty + 1;
                                            setTicketQty(qty);
                                            
                                            setTicketTotPrice(qty * selectedShow.price);
                                            
                                        }
                                        else {
                                            Alert.alert("Operazione Negata!", "Raggiunto numero massimo di biglietti!", [{ text: 'Ok' }])
                                        }

                                    }}
                                    icon="cart"
                                    btnStyles={{ width: 60, height: 60, borderRadius: 60, marginLeft: 12 }} />
                            </View>
                            <View style={{ paddingTop: 24 }}>
                                <Text style={styles.ticketLabel}>Totale: {ticketTotPrice} €</Text>
                            </View>
                        </View>
                        <RoundedButton
                            onClick={() => {
                                dispatch(buyTicket({
                                    id: uuid.v4(),
                                    showId: selectedShow.id,
                                    showName: selectedShow.name,
                                    showDate: selectedShow.date,
                                    ticketQty: ticketQty,
                                    ticketPrice: ticketTotPrice
                                }));
                                Alert.alert("Operazione Completata!", "Biglietto Acquistato", [{
                                    text: 'Ok', onPress: () => {
                                        setTicketQty(1);
                                        setTicketTotPrice(selectedShow.price);

                                    }
                                }])

                            }}
                            label="Acquista"
                            mainStyles={{ marginBottom: 8 }} />
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
        justifyContent: 'space-between'
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
    qtyValueContainer: {
        borderRadius: 10,
        borderWidth: 2,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    quantityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 24
    },
    ticketLabel: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: Colors.black,
        textAlign: 'center'
    }
});