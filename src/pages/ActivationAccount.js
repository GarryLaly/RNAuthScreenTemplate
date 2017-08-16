import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import {css} from '../styles/Global';

export default class ActivationAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={css.container}>
                <Text>ActivationAccount</Text>
            </View>
        );
    }
}


export const styles = StyleSheet.create({

});
