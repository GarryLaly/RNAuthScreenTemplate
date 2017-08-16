import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import {css} from '../styles/Global';

export default class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Register</Text>
            </View>
        );
    }
}


export const styles = StyleSheet.create({

});
