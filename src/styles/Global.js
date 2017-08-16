import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    auth_bg: {
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
        paddingVertical: 20,
        marginTop: 20,
        width: 80,
    },
    logo_title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
    },
    auth_content: {
        paddingHorizontal: 30,
    },
    auth_submit: {
        marginTop: 15,
    },
    bottom_button: {
        marginTop: 60,
        marginBottom: 30,
    },
    bottom_info: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5,
    },
});
