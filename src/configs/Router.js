import React, {Component} from 'react';
import {
    StackNavigator
} from 'react-navigation';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import ActivationAccount from '../pages/ActivationAccount';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';

// Main Router
export const Stack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: false
        }
    },
    ActivationAccount: {
        screen: ActivationAccount,
        navigationOptions: {
            header: false
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: false
        }
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            header: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#4C4949',
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
            title: 'Home'
        }
    },
});
