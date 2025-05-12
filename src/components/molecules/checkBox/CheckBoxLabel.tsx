import React from 'react';
import {View} from 'react-native';
import {CheckBoxComponent, TextComponent} from '../../atoms';
import {CheckBoxLabelStyles} from './checkBox.styles.ts';

interface ICheckBoxLabel {
    text: string;
    checked: boolean;
    toggleCheckbox: (value: boolean) => void;
}


export const CheckBoxLabel = ({text, checked, toggleCheckbox}: ICheckBoxLabel) => {
    return (
        <View style={CheckBoxLabelStyles.container}>
            <CheckBoxComponent checked={checked} toggleCheckbox={toggleCheckbox} />
            <TextComponent styles={CheckBoxLabelStyles.text} text={text} />
        </View>
    );
};
