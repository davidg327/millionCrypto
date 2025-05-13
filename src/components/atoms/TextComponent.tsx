import React from 'react';
import {Text, TextStyle} from 'react-native';

interface ITextComponent {
    styles: TextStyle;
    text?: string;
    children?: React.ReactNode;
    number?: number;
    testId?: string;
}

export const TextComponent = ({
                                  styles,
                                  text,
                                  children,
                                  number,
                                  testId,
}: ITextComponent) => {
    return (
        <Text
            allowFontScaling={false}
            style={styles}
            numberOfLines={number}
            testID={testId}
        >
            {text}
            {children}
        </Text>
    );
};
