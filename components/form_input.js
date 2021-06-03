import React, {forwardRef} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../utils/colors';

const FormInput = (props, ref) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                ref={ref}
                style={styles.textInput}
                value={props.initialValue}
                onChangeText={props.onChange}/>
        </View>
    );
};

export default forwardRef(FormInput);

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
});