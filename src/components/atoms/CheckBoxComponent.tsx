import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ICheckBoxComponent {
    checked: boolean;
    toggleCheckbox: (value: boolean) => void;
}

export const CheckBoxComponent = ({
                                      checked,
                                      toggleCheckbox,
}: ICheckBoxComponent) => {
    return (
        <Pressable onPress={() => toggleCheckbox(!checked)}>
            {checked ? <Icon name="check-box" size={30} /> : <Icon name="check-box-outline-blank" size={30} />}
        </Pressable>
    );
};
