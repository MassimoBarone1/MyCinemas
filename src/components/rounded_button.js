import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Colors from '../utils/colors';

const RoundedButton = props => {
    return (<TouchableOpacity onPress={props.onClick} style={{...styles.touchable, ...props.mainStyles}}>
        <View style={{...styles.container, ...props.styles}}>
            <Text style={styles.btnText}>{props.label}</Text>
        </View>
    </TouchableOpacity>)
};

export default RoundedButton;

const styles = StyleSheet.create({
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: Dimensions.get('window').width * 0.6,
        height: 50,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    btnText: {
        color: Colors.white,
        fontFamily: 'Montserrat-Bold'
    },
});