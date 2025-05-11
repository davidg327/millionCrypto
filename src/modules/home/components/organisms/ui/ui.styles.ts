import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const CardStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        elevation: 5,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    info: {
        marginTop: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    title: {
        fontWeight: '600',
        textAlign: 'center',
    },
});
