import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';

import {css} from '../styles/Global';

// Components
import Textbox from '../components/Textbox';
import Link from '../components/Link';
import ButtonRounded from '../components/ButtonRounded';

export default class ActivationAccount extends Component {
    constructor(props) {
        super(props);
    }

    redirect(route) {
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <View style={[css.container, styles.container]}>
                <Image
                  style={css.auth_bg}
                  source={require('../../res/img/bg.jpg')}
                  resizeMode="cover"
                  blurRadius={5}
                />
                <ScrollView style={css.auth_content}>
                    <Image
                      style={css.logo}
                      source={require('../../res/img/logo-temaku.co.id.jpg')}
                    />
                    <Text style={css.logo_title}>Temaku.co.id</Text>
                    <Textbox
                      placeholder="Username or Email"
                      keyboardType="email-address"
                    />
                    <Textbox
                      placeholder="Code Activation"
                    />
                    <View style={css.auth_submit}>
                        <ButtonRounded
                          onPress={() => this.redirect('Home')}
                          text="Submit"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
});
