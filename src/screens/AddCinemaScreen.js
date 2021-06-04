import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, Modal, Text, Platform, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity, TouchableNativeFeedback, Dimensions } from 'react-native';
import Colors from '../utils/colors';
import { useDispatch } from 'react-redux';
import { saveCinema } from '../store/slice/cinema_slice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CinemaRoomRow from '../components/cinema_room_row';
import FormInput from '../components/form_input';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import uuid from 'react-native-uuid';
import RoundedButton from '../components/rounded_button';

const formatDate = (date) => {
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    if (hours <= 9) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    return day + "-" + month + "-" + year + " " + hours + ":" + minutes;
}

const AddCinemaScreen = props => {

    // Form states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [openings, setOpenings] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [roomName, setRoomName] = useState("");
    const [roomSeats, setRoomSeats] = useState("");
    const [firstShow, setFirstShow] = useState("");
    const [firstShowDate, setFirstShowDate] = useState(new Date());
    const [secondShow, setSecondShow] = useState("");
    const [secondShowDate, setSecondShowDate] = useState(new Date());
    const [thirdShow, setThirdShow] = useState("");
    const [thirdShowDate, setThirdShowDate] = useState(new Date());
    const [cinemaRooms, setCinemaRooms] = useState([]);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [clickedValue, setClickedValue] = useState(-1);

    const dispatch = useDispatch();

    const addressRef = useRef();
    const openingHoursRef = useRef();
    const numberOfSeatsRef = useRef();
    const secondShowRef = useRef();
    const thirdShowRef = useRef();

    // Submit function
    const saveCinemaHandler = useCallback(() => {
        dispatch(saveCinema({
            id: uuid.v4(),
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
    }, [saveCinemaHandler, name, address, openings, cinemaRooms]);

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
                    setModalVisible(!modalVisible);
                }}
            >
                <View
                    style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalText}>Inserisci le info!</Text>
                                <TouchableOpacity title="Chiudi" onPress={() => setModalVisible(false)} style={styles.closeBtn}>
                                    <Ionicons name="close" color={Colors.white} size={24} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, width: '100%', paddingTop: 8 }}>
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

                                    <View style={styles.formBtnContainer}>
                                        <FormInput
                                            label={"Film 1, Inizio: " + formatDate(firstShowDate)}
                                            style={{ width: '80%' }}
                                            initialValue={firstShow}
                                            onChange={(text) => setFirstShow(text)}
                                            returnKeyType="next"
                                            keyboardType="default"
                                            onSubmitEditing={() => secondShowRef.current.focus()}
                                            blurOnSubmit={false} />
                                        <TouchableOpacity onPress={() => {
                                            setClickedValue(0);
                                            setIsDatePickerVisible(true);
                                        }} style={styles.calendarBtn}>
                                            <Ionicons name="calendar" color={Colors.white} size={24} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.formBtnContainer}>
                                        <FormInput
                                            label={"Film 2, Inizio: " + formatDate(secondShowDate)}
                                            style={{ width: '80%' }}
                                            initialValue={secondShow}
                                            onChange={(text) => setSecondShow(text)}
                                            returnKeyType="next"
                                            keyboardType="default"
                                            ref={secondShowRef}
                                            onSubmitEditing={() => thirdShowRef.current.focus()}
                                            blurOnSubmit={false} />
                                        <TouchableOpacity onPress={() => {
                                            setClickedValue(1);
                                            setIsDatePickerVisible(true)
                                        }} style={styles.calendarBtn}>
                                            <Ionicons name="calendar" color={Colors.white} size={24} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.formBtnContainer}>
                                        <FormInput
                                            label={"Film 3, Inizio: " + formatDate(thirdShowDate)}
                                            style={{ width: '80%' }}
                                            initialValue={thirdShow}
                                            onChange={(text) => setThirdShow(text)}
                                            returnKeyType="done"
                                            keyboardType="default"
                                            ref={thirdShowRef}
                                        />
                                        <TouchableOpacity onPress={() => {
                                            setClickedValue(2);
                                            setIsDatePickerVisible(true)
                                        }} style={styles.calendarBtn}>
                                            <Ionicons name="calendar" color={Colors.white} size={24} />
                                        </TouchableOpacity>
                                    </View>
                                    
                                        <RoundedButton
                                            onClick={
                                                () => {

                                                    if (roomName !== "" && roomSeats !== "" && firstShow !== "" && secondShow !== "" && thirdShow !== "") {
                                                        setCinemaRooms([...cinemaRooms, {
                                                            id: uuid.v4(),
                                                            name: roomName,
                                                            seats: roomSeats,
                                                            shows: [
                                                                {
                                                                    id: uuid.v4(),
                                                                    name: firstShow,
                                                                    date: formatDate(firstShowDate),
                                                                    remainingPlaces: roomSeats
                                                                },
                                                                {
                                                                    id: uuid.v4(),
                                                                    name: secondShow,
                                                                    date: formatDate(secondShowDate),
                                                                    remainingPlaces: roomSeats
                                                                },
                                                                {
                                                                    id: uuid.v4(),
                                                                    name: thirdShow,
                                                                    date: formatDate(thirdShowDate),
                                                                    remainingPlaces: roomSeats
                                                                }]
                                                        }]);
                                                        setRoomName("");
                                                        setRoomSeats("");
                                                        setFirstShow("");
                                                        setSecondShow("");
                                                        setThirdShow("");
                                                        setModalVisible(false);
                                                    }
                                                    else {
                                                        Alert.alert("Operazione negata", "Controlla tutti i campi", [{ text: 'Ok' }])
                                                    }
        
                                                }
                                            }
                                            mainStyles={{ marginBottom: 8 }}
                                            styles={{ marginTop: 16 }} 
                                            label="Conferma"/>

                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={(date) => {
                            console.log("AAA confirm");
                            if (clickedValue === 0) {
                                setFirstShowDate(date);
                            }
                            else if (clickedValue === 1) {
                                setSecondShowDate(date);
                            }
                            else {
                                setThirdShowDate(date);
                            }
                            setIsDatePickerVisible(false);
                        }}
                        onCancel={() => setIsDatePickerVisible(false)}
                    />
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
                    <View key={element.id} style={styles.labelRoomsContainer}>
                        <CinemaRoomRow
                            name={element.name}
                            numOfSeats={element.seats}
                            shows={element.shows} />
                    </View>))}

            </View>
            <RoundedButton
                onClick={() => { setModalVisible(true); }}
                mainStyles={{ marginBottom: 8 }}
                styles={{ marginTop: 16 }}
                label="Aggiungi Sala"/>

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
    addBtnContainer: {
        width: Dimensions.get('window').width * 0.6,
        height: 50,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 16,
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
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    closeBtn: {
        width: 50,
        height: 50,
        backgroundColor: Colors.orange,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarBtn: {
        width: 40,
        height: 40,
        backgroundColor: Colors.orange,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    formBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    modalText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.5)',
    }
});