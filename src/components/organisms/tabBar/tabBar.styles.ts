import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

const { width, height } = Dimensions.get('window');

export const customTabBarStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: width,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.1,
        paddingTop: height * 0.01,
        paddingBottom: Platform.OS === 'ios' ? height * 0.03 : height * 0.01,
    },
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
        lineHeight: 15,
    },
});
