import {StyleSheet} from "react-native";
import {Colors} from "../../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.white,
        marginVertical: 4,
        borderRadius: 8,
        borderLeftWidth: 6,
        justifyContent: 'center',
    },
    containerBackground: {
        width: '90%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 4,
        borderRadius: 8,
        justifyContent: 'center',
    },
    title: {
        fontSize: 12,
        color: Colors.black,
        fontWeight: '600',
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 10,
        color: Colors.black,
        fontWeight: '300',
        marginTop: 2,
        marginLeft: 10,
    },
    subtitleBackground: {
        fontSize: 12,
        color: Colors.white,
        fontWeight: '500',
        marginTop: 2,
        marginLeft: 10,
    },
});
