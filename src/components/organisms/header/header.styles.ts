import { StyleSheet } from 'react-native';
import {Colors} from '../../../theme';

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: 20,
    },
    icon: {
        left: 20,
        position: 'absolute',
        top: 7,
        zIndex: 1,
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
});
