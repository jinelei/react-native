import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SecondScreen from "./SecondScreen";

export default StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Second: {
        screen: SecondScreen,
    },
},{
    initialRouteName: 'Home'
});
