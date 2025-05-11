import {useToast} from 'react-native-toast-notifications';
import {Colors} from "../theme";

type IColor = 'success' | 'error';

const paletteColor = (color: IColor) => {
    switch (color) {
        case 'success':
            return Colors.success;
        case 'error':
            return Colors.error;
        default:
            return Colors.success;
    }
};


export function useNotification() {
    const toast = useToast();

    const showNotification = (messageToast: string, color: IColor) => {
        toast.show(messageToast, {
            type: 'background_toast',
            animationDuration: 100,
            data: {
                color: paletteColor(color),
            },
        });
    };

    return {showNotification};
}
