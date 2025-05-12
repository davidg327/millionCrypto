import React from 'react';
import {TextInput, TextStyle} from 'react-native';

interface ITextInputComponent {
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
    styles: TextStyle;
}

export const TextInputComponent = ({
                                       placeholder,
                                       value,
                                       onChange,
                                       styles,
}: ITextInputComponent) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            style={styles}
        />
    );
};
