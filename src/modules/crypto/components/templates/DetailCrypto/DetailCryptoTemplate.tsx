import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatListComponent, LoadingComponent, TextComponent} from '../../../../../components/atoms';
import {CardMarkets} from '../../organisms';
import {Header} from '../../../../../components/organisms';
import {useCryptoStore} from '../../../../../store';
import {formatCurrency, getColor} from '../../../../../functions';
import {ICrypto, IMarket} from '../../../../../interface';
import {Colors} from '../../../../../theme';
import {styles} from './DetailCryptoTemplate.styles.ts';

interface IDetailCryptoTemplate {
    crypto: ICrypto;
    goBack: () => void;
}

interface IItem {
    item: IMarket;
}

export const DetailCryptoTemplate = ({crypto, goBack}: IDetailCryptoTemplate) => {
    const {markets, loadMarkets} = useCryptoStore();

   const Item = ({item}: IItem) => {
        return (
            <CardMarkets
                name={item.name}
                base={item.base}
                quote={item.quote}
                price={item.price_usd}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header
                name={crypto?.name}
                goBack={goBack}
                iconRight={<View style={styles.favorite}>
                    <FontAwesome name={"heart-o"} color={Colors.white} size={35} />
                </View>}
            />
            <View style={styles.containerCardPrincipal}>
                <View style={styles.containerInfoText}>
                    <TextComponent styles={styles.text} text={crypto.symbol} />
                    <View style={styles.containerRank}>
                        <TextComponent styles={styles.text} text={`Ranking:`} />
                        <TextComponent styles={styles.textSimple} text={`${crypto.rank}`} />
                    </View>
                </View>
                <View style={styles.containerInfoText}>
                    <TextComponent styles={styles.text} text={formatCurrency(crypto.price_usd)} />
                    <View style={{...styles.containerChange, backgroundColor: getColor(crypto.percent_change_1h)}}>
                        <TextComponent styles={styles.textChange} text={`${crypto.percent_change_1h}%`} />
                    </View>
                </View>
            </View>
            {loadMarkets && (
                <View style={styles.containerLoad}>
                    <LoadingComponent size={"large"} color={Colors.primary} />
                </View>
            )}
            {markets.length > 0 && (
                <View>
                    <TextComponent styles={styles.title} text={'Mercados de comercialización'} />
                    <FlatListComponent
                        list={markets}
                        renderItem={({item}: any) => (
                            <Item
                                item={item}
                            />
                        )}
                        contentStyle={styles.flatList}
                        empty={<TextComponent styles={styles.textEmpty} text={'No hay mercados registrados'} />}
                        activeIndex={true}
                    />
                </View>
            )}
        </View>
    );
};
