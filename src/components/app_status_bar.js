import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../utils/colors';
import { useSelector} from 'react-redux';

const AppStatusBar = props => {

    const statusBarStyle = useSelector(state => state.statusBar.barStyle);

    return <StatusBar 
    barStyle={statusBarStyle}
    backgroundColor={Colors.orange}/>;
};

export default AppStatusBar;
