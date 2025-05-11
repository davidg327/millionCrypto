import React from 'react';
import {View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {TextComponent } from '../../atoms';
import {styles} from "./toast.styles.ts";

interface IToastProviderComponent {
    children: React.ReactNode;
}

export const ToastProviderComponent = ({
                                           children,
                                       }: IToastProviderComponent) => {
    return (
        <ToastProvider
            placement="top"
            offset={10}
            renderType={{
                background_toast: (toast) => (
                    <View
                        style={{
                            ...styles.containerBackground,
                            backgroundColor: toast.data.color,
                        }}
                    >
                        <TextComponent
                            styles={styles.subtitleBackground}
                            text={toast.message}
                        />
                    </View>
                ),
                custom_toast: (toast) => (
                    <View
                        style={{ ...styles.container, borderLeftColor: toast.data.color }}
                    >
                        <TextComponent styles={styles.title} text={toast.data.title} />
                        <TextComponent
                            styles={styles.subtitle}
                            text={toast.message}
                        />
                    </View>
                ),
            }}
        >
            {children}
        </ToastProvider>
    );
};
