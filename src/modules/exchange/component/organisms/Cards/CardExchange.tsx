import React from 'react'
import {Pressable, View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {CardExchangeStyles} from './Cards.styles.ts';

interface ICardCrypto {
    name: string;
    country: string;
    onPress: () => void;
}

export const CardExchange = ({name, country, onPress}: ICardCrypto) => {
    return (
        <Pressable style={CardExchangeStyles.container} onPress={onPress}>
            <View style={CardExchangeStyles.containerText}>
                <TextComponent styles={CardExchangeStyles.textBold} text={'Nombre:'} />
                <TextComponent styles={CardExchangeStyles.textSimple} text={name} />
            </View>
            <View style={CardExchangeStyles.containerText}>
                <TextComponent styles={CardExchangeStyles.textBold} text={'País:'} />
                <TextComponent styles={CardExchangeStyles.textSimple} text={country} />
            </View>
        </Pressable>
    )
}
