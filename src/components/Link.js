import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import {css} from '../styles/Global';

export default class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}>
                <View>
                    <Text style={styles.caption}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export const styles = StyleSheet.create({
    caption: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 3,
        margin: 10,
    }
});
