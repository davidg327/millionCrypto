import React from 'react'
import {Pressable, View} from 'react-native';
import {TextComponent} from '../../../../../components/atoms';
import {formatCurrency, getColor} from '../../../../../functions';
import {CardCryptosStyles} from './Cards.styles.ts';

interface ICardCrypto {
    symbol: string;
    priceDollar: string;
    change: string;
    onPress: () => void;
}

export const CardCrypto = ({symbol, priceDollar, change, onPress}: ICardCrypto) => {
    return (
        <Pressable style={CardCryptosStyles.container} onPress={onPress}>
            <TextComponent styles={CardCryptosStyles.textBold} text={symbol} />
            <View style={CardCryptosStyles.containerPrice}>
                <TextComponent styles={CardCryptosStyles.textSimple} text={formatCurrency(priceDollar)} />
                <View style={{...CardCryptosStyles.containerStatus, backgroundColor: getColor(change)}}>
                    <TextComponent styles={CardCryptosStyles.textStatus} text={`${change}%`} />
                </View>
            </View>
        </Pressable>
    )
}
