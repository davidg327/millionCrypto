import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../theme";

export const CardMarketsStyles = StyleSheet.create({
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
        width: '40%',
    },
});

export const CardCryptosStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%',
    },
    containerPrice: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerStatus: {
        borderRadius: 10,
        marginLeft: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textBold: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '600',
    },
    textSimple: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '400',
    },
    textStatus: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '600',
    },
});
