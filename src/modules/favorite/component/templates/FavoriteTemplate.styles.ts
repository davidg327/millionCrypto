import {StyleSheet} from 'react-native';
import {Colors} from '../../../../theme';

export const styles = StyleSheet.create({
    flatList: {
        paddingBottom: 120,
    },
    icon: {
      position: 'absolute',
      right: 25,
      top: 15,
    },
    input: {
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.inactive,
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
        width: '90%',
    },
    iconSearch: {
        position: 'absolute',
        right: 40,
        top: 35,
    },
    textEmpty: {
        color: Colors.text,
        marginTop: 20,
        textAlign: 'center',
    },
});
