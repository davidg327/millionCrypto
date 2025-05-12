import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    containerLoad: {
        alignSelf: 'center',
        marginTop: 20,
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 20,
        zIndex: 1,
    },
    flatList: {
        paddingBottom: 350,
    },
    textEmpty: {
        color: Colors.text,
        marginTop: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 20,
    },
});
