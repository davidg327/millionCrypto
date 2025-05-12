import React from 'react'
import {View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {formatCurrency} from '../../../../../functions';
import {CardMarketsStyles} from './Cards.styles.ts';

interface ICardMarkets {
    name: string;
    base: string;
    quote: string;
    price: string;
}

export const CardMarkets = ({name, base, quote, price}: ICardMarkets) => {
    return (
        <View style={CardMarketsStyles.container}>
            <View style={CardMarketsStyles.containerText}>
                <TextComponent styles={CardMarketsStyles.textBold} text={'Nombre del comercio:'} />
                <TextComponent styles={CardMarketsStyles.textSimple} text={name} />
            </View>
            <View style={CardMarketsStyles.containerText}>
                <TextComponent styles={CardMarketsStyles.textBold} text={'Moneda base:'} />
                <TextComponent styles={CardMarketsStyles.textSimple} text={base} />
            </View>
            <View style={CardMarketsStyles.containerText}>
                <TextComponent styles={CardMarketsStyles.textBold} text={'Moneda de cotización:'} />
                <TextComponent styles={CardMarketsStyles.textSimple} text={quote} />
            </View>
            <View style={CardMarketsStyles.containerText}>
                <TextComponent styles={CardMarketsStyles.textBold} text={'Precio actual en dólar:'} />
                <TextComponent styles={CardMarketsStyles.textSimple} text={formatCurrency(price)} />
            </View>
        </View>
    )
}
