import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const CardExchangeStyles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        elevation: 5,
        marginTop: 20,
        padding: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%',
    },
    containerText: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textBold: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '600',
        width: '30%'
    },
    textSimple: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
        width: '40%'
    },
});

export const CardPairStyles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        elevation: 5,
        marginTop: 20,
        padding: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%',
    },
    containerText: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textBold: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '600',
        width: '50%'
    },
    textSimple: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
        width: '40%'
    },
});
