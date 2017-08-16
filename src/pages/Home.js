import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import {css} from '../styles/Global';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={css.container}>
                <Text style={styles.welcome}>Welcome to Temaku.co.id :)</Text>
                <Text style={styles.welcome}>Feel free to discussion project with us at info.temaku@gmail.com</Text>
            </View>
        );
    }
}


export const styles = StyleSheet.create({
    welcome: {
        color: '#333',
        fontSize: 14,
        textAlign: 'center',
        padding: 15,
    },
});
