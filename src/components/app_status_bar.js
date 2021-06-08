import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../utils/colors';

const AppStatusBar = props => {

    return <StatusBar 
    barStyle='dark-content'
    backgroundColor={Colors.orange}/>;
};

export default AppStatusBar;
