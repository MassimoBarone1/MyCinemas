import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/colors';

const CircularButton = props => {
    return (<TouchableOpacity onPress={props.onClick} style={{...styles.touchable, ...props.btnStyles}}>
        <Ionicons name={props.icon} color={Colors.white} size={24} />
    </TouchableOpacity>)
};

export default CircularButton;

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
});