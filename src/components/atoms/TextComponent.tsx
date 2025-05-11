import React from 'react';
import {Text, TextStyle} from 'react-native';

interface ITextComponent {
    styles: TextStyle;
    text?: string;
    children?: React.ReactNode;
    number?: number;
}

export const TextComponent = ({
                                  styles,
                                  text,
                                  children,
                                  number,
}: ITextComponent) => {
    return (
        <Text
            allowFontScaling={false}
            style={styles}
            numberOfLines={number}>
            {text}
            {children}
        </Text>
    );
};
