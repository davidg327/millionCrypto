import React from 'react';
import CheckBox from '@react-native-community/checkbox';

interface ICheckBoxComponent {
    checked: boolean;
    toggleCheckbox: (value: boolean) => void;
}

export const CheckBoxComponent = ({
                                      checked,
                                      toggleCheckbox,
}: ICheckBoxComponent) => {
    return (
      <CheckBox
        value={checked}
        onValueChange={toggleCheckbox}
      />
    );
};
