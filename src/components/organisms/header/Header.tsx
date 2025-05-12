import React from 'react';
import {Pressable, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextComponent} from '../../atoms';
import {Colors} from '../../../theme';
import {headerStyles} from './header.styles.ts';

interface IHeader {
    name: string;
    goBack?: () => void;
    iconRight?: React.ReactElement | null;
}

export const Header = ({ name, goBack, iconRight }: IHeader) => {
    return (
        <View style={headerStyles.container}>
            {goBack && (
                <Pressable onPress={goBack} style={headerStyles.icon}>
                    <FontAwesome name={'angle-left'} color={Colors.white} size={50} />
                </Pressable>
            )}
            <TextComponent styles={headerStyles.text} text={name} />
            {iconRight}
        </View>
    );
};
