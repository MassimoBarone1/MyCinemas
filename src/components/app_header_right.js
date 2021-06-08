import React from 'react';
import { View } from 'react-native';
import Colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {updateState} from '../store/slice/status_bar_slice';

const AppHeaderRight = props => {

    const style = useSelector(state => state.statusBar.barStyle);
    const dispatch = useDispatch();


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
            onPress={() => {
                if(style === 'default'){
                    dispatch(updateState('dark-content'));
                }
                else if(style === 'dark-content'){
                    dispatch(updateState('light-content'));
                }
                else{
                    dispatch(updateState('dark-content'));
                }
            }} />
    </View>)
};

export default AppHeaderRight;