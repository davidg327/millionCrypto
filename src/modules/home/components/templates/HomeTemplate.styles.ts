import {StyleSheet} from 'react-native';
import {Colors} from '../../../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    containerCard: {
      width: '47%',
    },
    containerCards: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    containerOnlyCard: {
        alignSelf: 'center',
        marginTop: 20,
        width: '90%',
    },
});
