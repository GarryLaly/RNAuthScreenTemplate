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

export default class Register extends Component {
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
                      placeholder="Fullname"
                      autoCapitalize="words"
                    />
                    <Textbox
                      placeholder="Email"
                      keyboardType="email-address"
                    />
                    <Textbox
                      placeholder="Username"
                    />
                    <Textbox
                      placeholder="Password"
                      secureTextEntry={true}
                    />
                    <Textbox
                      placeholder="Password Confirmation"
                      secureTextEntry={true}
                    />
                    <Link
                      onPress={() => this.redirect('ActivationAccount')}
                      text="Activation Account"
                    />
                    <View style={css.auth_submit}>
                        <ButtonRounded
                          onPress={() => this.redirect('ActivationAccount')}
                          text="Register"
                        />
                    </View>
                    <View style={css.bottom_button}>
                        <Text style={css.bottom_info}>You already have an account?</Text>
                        <ButtonRounded
                          onPress={() => this.redirect('Login')}
                          text="Login"
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
