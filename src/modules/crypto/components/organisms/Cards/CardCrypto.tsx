import React from 'react'
import {View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {formatCurrency, getColor} from '../../../../../functions';
import {CardCryptosStyles} from './Cards.styles.ts';

interface ICardCrypto {
    symbol: string;
    priceDollar: string;
    change: string;
}

export const CardCrypto = ({symbol, priceDollar, change}: ICardCrypto) => {
    return (
        <View style={CardCryptosStyles.container}>
            <TextComponent styles={CardCryptosStyles.textBold} text={symbol} />
            <View style={CardCryptosStyles.containerPrice}>
                <TextComponent styles={CardCryptosStyles.textSimple} text={formatCurrency(priceDollar)} />
                <View style={{...CardCryptosStyles.containerStatus, backgroundColor: getColor(change)}}>
                    <TextComponent styles={CardCryptosStyles.textStatus} text={`${change}%`} />
                </View>
            </View>
        </View>
    )
}
