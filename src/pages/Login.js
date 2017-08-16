import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';

import {css} from '../styles/Global';

// Components
import Textbox from '../components/Textbox';
import Link from '../components/Link';
import ButtonRounded from '../components/ButtonRounded';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[css.container, styles.container]}>
                <Image
                  style={styles.bg}
                  source={require('../../res/img/bg.jpg')}
                  resizeMode="cover"
                  blurRadius={5}
                />
                <View style={styles.content}>
                    <Image
                      style={styles.logo}
                      source={require('../../res/img/logo-temaku.co.id.jpg')}
                    />
                    <Text style={styles.title}>Temaku.co.id</Text>
                    <Textbox
                      placeholder="Username or Email"
                      keyboardType="email-address"
                    />
                    <Textbox
                      placeholder="Password"
                      secureTextEntry={true}
                    />
                    <Link
                      onPress={() => alert('Forgot Password')}
                      text="Forgot Password"
                    />
                    <View style={styles.submit}>
                        <ButtonRounded
                          onPress={() => alert('Login')}
                          text="Login"
                        />
                    </View>
                    <View style={styles.register_button}>
                        <Text style={styles.register_info}>You dont have an account?</Text>
                        <ButtonRounded
                          onPress={() => alert('Register')}
                          text="Register"
                        />
                    </View>
                </View>
            </View>
        );
    }
}


export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logo: {
        alignSelf: 'center',
        borderRadius: 100,
        height: 80,
        marginTop: 20,
        width: 80,
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
    },
    content: {
        paddingHorizontal: 30,
    },
    submit: {
        marginTop: 15,
    },
    register_button: {
        marginTop: 60,
    },
    register_info: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5,
    },
});
