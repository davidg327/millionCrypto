import React from 'react';
import {View} from 'react-native';
import {FlatListComponent, LoadingComponent, TextComponent} from '../../../../../components/atoms';
import {CardCrypto} from '../../organisms';
import {Header} from '../../../../../components/organisms';
import {useCryptoStore} from '../../../../../store';
import {ICrypto} from '../../../../../interface';
import {Colors} from '../../../../../theme';
import {styles} from './ListCryptoTemplate.styles.ts';

interface IItem {
    item: ICrypto;
}

interface IListCryptoTemplate {
    moreData: () => void;
    redirectDetail: (crypto: ICrypto) => void;
}

export const ListCryptoTemplate = ({moreData, redirectDetail}: IListCryptoTemplate) => {

    const {loadCryptos, start, cryptos} = useCryptoStore();

    const Item = ({item}: IItem) => {
        return (
            <CardCrypto
                symbol={item.symbol}
                priceDollar={item.price_usd}
                change={item.percent_change_1h}
                onPress={() => redirectDetail(item)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header name={'Criptomonedas'}  />
            {start === 0 && cryptos.length === 0 && (
                <View style={styles.load}>
                    <LoadingComponent size={'large'} color={Colors.primary} />
                </View>
            )}
            {cryptos.length > 0 && (
                <FlatListComponent
                    list={cryptos}
                    renderItem={({item}: any) => (
                        <Item
                            item={item}
                        />
                    )}
                    loadMoreCryptos={() => {
                        if(!loadCryptos){
                            moreData();
                        }
                    }}
                    contentStyle={styles.flatList}
                    empty={<TextComponent styles={styles.textEmpty} text={'No hay criptomonedas'} />}
                    footer={loadCryptos ?  <View style={styles.load}>
                        <LoadingComponent size={'large'} color={Colors.primary} />
                    </View>: <></>}
                />
            )}
        </View>
    );
};
