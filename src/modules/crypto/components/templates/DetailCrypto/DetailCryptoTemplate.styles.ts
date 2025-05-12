import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    containerCardPrincipal: {
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 5,
        marginTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%',
    },
    containerChange: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    containerLoad: {
        alignSelf: 'center',
        marginTop: 20,
    },
    containerInfoText: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    containerRank: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    favorite: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    flatList: {
        paddingBottom: 350,
    },
    text: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
    textChange: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '800',
    },
    textEmpty: {
        color: Colors.text,
        marginTop: 20,
        textAlign: 'center',
    },
    textSimple: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 20,
    },
});
