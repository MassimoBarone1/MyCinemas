import React from 'react';
import { View } from 'react-native';
import Colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeaderRight = props => {
   return (<View style={{ flexDirection: 'row' }}>
        <Ionicons
            name={props.leftIconName}
            color={Platform.OS === 'android' ? Colors.white : Colors.orange}
            style={{ padding: 8 }}
            size={24}
            onPress={props.leftClick} />
            
        <Ionicons
            name={props.rightIconName}
            color={Platform.OS === 'android' ? Colors.white : Colors.orange}
            style={{ padding: 8 }}
            visible={props.rightIconName}
            size={24}
            onPress={() => {}} />
    </View>)
};

export default AppHeaderRight;