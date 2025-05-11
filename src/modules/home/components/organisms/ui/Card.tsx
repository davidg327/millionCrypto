import React from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {CardStyles} from './ui.styles.ts';

interface ICard {
    title: string;
    info: string;
    color: string;
}

export const Card = ({title, info, color}: ICard) => {
    return (
        <View style={CardStyles.container}>
            <TextComponent
                styles={CardStyles.title}
                text={title}
            />
            <TextComponent
                styles={{...CardStyles.info, color: color}}
                text={info}
            />
        </View>
    );
};
