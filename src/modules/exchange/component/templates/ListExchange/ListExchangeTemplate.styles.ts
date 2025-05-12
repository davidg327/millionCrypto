import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    flatList: {
      paddingBottom: 120,
    },
    load: {
      marginTop: 20,
    },
    textEmpty: {
        color: Colors.text,
        marginTop: 20,
        textAlign: 'center',
    },
});
