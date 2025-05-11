import React from 'react';
import {ActivityIndicator} from 'react-native';

interface ILoadingComponent {
    size: 'small' | 'large';
    color: string;
}

export const LoadingComponent = ({size, color}: ILoadingComponent) => {
    return (
        <ActivityIndicator size={size} color={color}  />
    );
};
