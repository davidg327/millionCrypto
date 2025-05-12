import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const ModalFilterStyles = StyleSheet.create({
    buttonApply: {
      alignSelf: 'center',
      backgroundColor: Colors.primary,
      borderRadius: 10,
      marginTop: 20,
      paddingVertical: 10,
      width: '90%',
    },
    buttonCancel: {
        alignSelf: 'center',
        backgroundColor: Colors.inactive,
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 20,
        paddingVertical: 10,
        width: '90%',
    },
    container: {
        backgroundColor: Colors.white,
        minHeight: '60%',
    },
    containerCheck: {
        alignSelf: 'center',
        marginTop: 20,
        width: '90%',
    },
    textApply: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    textSubtitle: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 20,
    },
    textTile: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
});
