import React from 'react'
import {View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {formatCurrency} from "../../../../../functions";
import {CardPairStyles} from './Cards.styles.ts';

interface ICardPair {
    base: string;
    quote: string;
    price: number;
}

export const CardPair = ({base, quote, price}: ICardPair) => {
    return (
        <View style={CardPairStyles.container}>
            <View style={CardPairStyles.containerText}>
                <TextComponent styles={CardPairStyles.textBold} text={'Base:'} />
                <TextComponent styles={CardPairStyles.textSimple} text={base} />
            </View>
            <View style={CardPairStyles.containerText}>
                <TextComponent styles={CardPairStyles.textBold} text={'Cotización:'} />
                <TextComponent styles={CardPairStyles.textSimple} text={quote} />
            </View>
            <View style={CardPairStyles.containerText}>
                <TextComponent styles={CardPairStyles.textBold} text={'Precio en dólar:'} />
                <TextComponent styles={CardPairStyles.textSimple} text={formatCurrency(price.toString())} />
            </View>
        </View>
    )
}
