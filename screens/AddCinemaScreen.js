import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, Modal, Text, Platform, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity, TouchableNativeFeedback, Dimensions } from 'react-native';
import Colors from '../utils/colors';
import { useDispatch } from 'react-redux';
import { saveCinema } from '../store/slice/cinema_slice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CinemaRoomRow from '../components/cinema_room_row';
import FormInput from '../components/form_input';

const AddCinemaScreen = props => {

    // Form states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [openings, setOpenings] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [roomName, setRoomName] = useState("");
    const [roomSeats, setRoomSeats] = useState("");
    const [firstShow, setFirstShow] = useState("");
    const [secondShow, setSecondShow] = useState("");
    const [thirdShow, setThirdShow] = useState("");
    const [cinemaRooms, setCinemaRooms] = useState([]);

    const dispatch = useDispatch();

    const addressRef = useRef();
    const openingHoursRef = useRef();
    const numberOfSeatsRef = useRef();
    const secondShowRef = useRef();
    const thirdShowRef = useRef();

    // Submit function
    const saveCinemaHandler = useCallback(() => {
        dispatch(saveCinema({
            id: Math.floor(Math.random() * 1000) + 1,
            name: name,
            address: address,
            openings: openings,
            rooms: cinemaRooms,
            roomsNumber: cinemaRooms.length
        }));
        Alert.alert("Success", "Cinema saved!", [{
            text: 'Ok', onPress: () => {
                props.navigation.goBack();
            }
        }])
    }, [name, address, openings, cinemaRooms]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (<Ionicons name="save" color={Platform.OS === 'android' ? Colors.white : Colors.orange} size={24} style={{ padding: 8 }} onPress={() => {
                if (name === "" || address === "" || openings === "" || cinemaRooms.length === 0) {
                    Alert.alert("Cannot save data", "Please control data", [{ text: 'Ok' }]);
                    return;
                }
                saveCinemaHandler();


            }} />)
        })
    }, [saveCinemaHandler, name, address, openings]);

    // Change touchable
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white, justifyContent: 'space-between' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Inserisci le info della sala!</Text>
                        <View style={{ flex: 1, width: '100%' }}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                                <FormInput
                                    label="Nome Sala"
                                    initialValue={roomName}
                                    onChange={(text) => setRoomName(text)}
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={() => { numberOfSeatsRef.current.focus(); }}
                                    blurOnSubmit={false} />

                                <FormInput
                                    label="Numero Posti"
                                    initialValue={roomSeats}
                                    onChange={(text) => setRoomSeats(text)}
                                    keyboardType="phone-pad"
                                    ref={numberOfSeatsRef} />

                                <FormInput
                                    label="Film 1"
                                    initialValue={firstShow}
                                    onChange={(text) => setFirstShow(text)}
                                    returnKeyType="next"
                                    keyboardType="default"
                                    onSubmitEditing={() => secondShowRef.current.focus()}
                                    blurOnSubmit={false} />

                                <FormInput
                                    label="Film 2"
                                    initialValue={secondShow}
                                    onChange={(text) => setSecondShow(text)}
                                    returnKeyType="next"
                                    keyboardType="default"
                                    ref={secondShowRef}
                                    onSubmitEditing={() => thirdShowRef.current.focus()}
                                    blurOnSubmit={false} />

                                <FormInput
                                    label="Film 3"
                                    initialValue={thirdShow}
                                    onChange={(text) => setThirdShow(text)}
                                    returnKeyType="done"
                                    keyboardType="default"
                                    ref={thirdShowRef}
                                />
                                <View style={styles.touchable}>
                                    <TouchableComponent onPress={() => {

                                        setCinemaRooms([...cinemaRooms, {
                                            id: Math.floor(Math.random() * 1000) + 1,
                                            name: roomName,
                                            seats: roomSeats,
                                            shows: [firstShow, secondShow, thirdShow]
                                        }]);
                                        setRoomName("");
                                        setRoomSeats("");
                                        setFirstShow("");
                                        setSecondShow("");
                                        setThirdShow("");
                                        setModalVisible(false);
                                    }}>
                                        <View style={styles.addBtnContainer}>
                                            <Text style={styles.btnText}>Conferma</Text>
                                        </View>
                                    </TouchableComponent>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </View>

            </Modal>
            <View>
                <FormInput
                    label="Nome Cinema"
                    initialValue={name}
                    onChange={(text) => setName(text)}
                    keyboardType="default"
                    returnKeyType="next"
                    onSubmitEditing={() => addressRef.current.focus()}
                    blurOnSubmit={false} />
                <FormInput
                    label="Indirizzo"
                    initialValue={address}
                    onChange={(text) => setAddress(text)}
                    keyboardType="default"
                    returnKeyType="next"
                    ref={addressRef}
                    onSubmitEditing={() => openingHoursRef.current.focus()}
                    blurOnSubmit={false} />
                <FormInput
                    label="Orari Apertura"
                    initialValue={openings}
                    onChange={(text) => setOpenings(text)}
                    keyboardType="default"
                    returnKeyType="done"
                    ref={openingHoursRef}
                    blurOnSubmit={false} />

                <View style={styles.labelRoomsContainer}>
                    <Text style={styles.labelRooms}>Sale</Text>
                </View>
                {cinemaRooms.length === 0 ? <View style={styles.labelRoomsContainer}>
                    <Text style={styles.labelRooms}>Nessuna sala aggiunta</Text>
                </View> : cinemaRooms.map(element => (
                    <View style={styles.labelRoomsContainer}>
                        <CinemaRoomRow
                            name={element.name}
                            numOfSeats={element.seats}
                            shows={element.shows} />
                    </View>))}

            </View>
            <View style={styles.touchable}>
                <TouchableComponent onPress={() => {
                    setModalVisible(true);
                }}>
                    <View style={styles.addBtnContainer}>
                        <Text style={styles.btnText}>Aggiungi Sala</Text>
                    </View>
                </TouchableComponent>
            </View>

        </ScrollView>);
};

export default AddCinemaScreen;

const styles = StyleSheet.create({
    fieldContainer: {
        width: '100%',
        alignItems: 'center'
    },
    label: {
        marginTop: 10,
        marginLeft: 8,
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
    textInput: {
        padding: 2,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 8,
        width: '80%',
        height: 50
    },
    touchable: {
        alignItems: 'center',
        paddingBottom: 8,
    },
    addBtnContainer: {
        width: Dimensions.get('window').width * 0.6,
        height: 50,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 16
    },
    btnText: {
        color: Colors.white,
        fontFamily: 'Montserrat-Bold'
    },
    labelRooms: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },
    labelRoomsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.6,
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: Colors.black,
        paddingTop: 20,
        paddingHorizontal: 10,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 20,
        alignItems: 'center',
    }
});