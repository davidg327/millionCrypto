import React from 'react';
import {Linking, Pressable, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatListComponent, LoadingComponent, TextComponent} from '../../../../../components/atoms';
//import {CardMarkets} from '../../organisms';
import {Header} from '../../../../../components/organisms';
import {useCryptoStore, useExchangeStore} from '../../../../../store';
import {formatCurrency, getColor} from '../../../../../functions';
import {IExchange, IMarket, IPairs} from '../../../../../interface';
import {Colors} from '../../../../../theme';
import {styles} from './DetailExchangeTemplate.styles.ts';
import {CardPair} from "../../organisms";

interface IDetailExchangeTemplate {
    exchange: IExchange;
    goBack: () => void;
}

interface IItem {
    item: IPairs;
}

export const DetailExchangeTemplate = ({exchange, goBack}: IDetailExchangeTemplate) => {

    const {loadPairs, pairs} = useExchangeStore();

   const Item = ({item}: IItem) => {
        return (
            <CardPair
                base={item.base}
                quote={item?.quote ?? 'No registrada'}
                price={item.price_usd}
            />
        );
    };

   const redirectWeb = (url: string) => {
     Linking.openURL(url);
   };

    return (
        <View style={styles.container}>
            <Header
                name={exchange?.name}
                goBack={goBack}
                iconRight={<Pressable style={styles.icon} onPress={() => redirectWeb(exchange.url)}>
                    <MaterialCommunityIcons name={'web'} color={Colors.white} size={35} />
                </Pressable>}
            />
            {loadPairs && (
                <View style={styles.containerLoad}>
                    <LoadingComponent size={"large"} color={Colors.primary} />
                </View>
            )}
            {pairs.length > 0 && (
                <View>
                    <TextComponent styles={styles.title} text={'Pares de intercambio'} />
                    <FlatListComponent
                        list={pairs}
                        renderItem={({item}: any) => (
                            <Item
                                item={item}
                            />
                        )}
                        contentStyle={styles.flatList}
                        empty={<TextComponent styles={styles.textEmpty} text={'No hay pares registrados'} />}
                        activeIndex={true}
                    />
                </View>
            )}
        </View>
    );
};
