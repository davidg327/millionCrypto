import React from 'react';
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
      <Pressable
        testID={'Container-Card-Crypto'}
        style={CardCryptosStyles.container}
        onPress={onPress}>
        <TextComponent
          testId={'Text-Symbol'}
          styles={CardCryptosStyles.textBold}
          text={symbol}
        />
        <View style={CardCryptosStyles.containerPrice}>
          <TextComponent
            testId={'Function-Price-Dolar'}
            styles={CardCryptosStyles.textSimple}
            text={formatCurrency(priceDollar)}
          />
          <View
            testID="Container-Change-Status"
            style={{
              ...CardCryptosStyles.containerStatus,
              backgroundColor: getColor(change),
            }}>
            <TextComponent
              testId={'Text-Change'}
              styles={CardCryptosStyles.textStatus}
              text={`${change}%`}
            />
          </View>
        </View>
      </Pressable>
    );
};
