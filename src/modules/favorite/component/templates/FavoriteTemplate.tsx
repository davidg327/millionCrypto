import React from 'react';
import {Pressable, View} from 'react-native';
import {Colors} from "../../../../theme";
import {Header} from '../../../../components/organisms';
import {useFavoriteStore} from "../../../../store/favorite";
import {styles} from "../../../crypto/components/templates/ListCrypto/ListCryptoTemplate.styles.ts";
import {FlatListComponent, LoadingComponent, TextComponent} from "../../../../components/atoms";
import {CardCrypto} from "../../../crypto/components/organisms";
import {ICrypto} from "../../../../interface";

interface IFavoriteTemplate {
    redirectDetail: (value: ICrypto) => void;
}

interface IItem {
    item: ICrypto;
}

export const FavoriteTemplate = ({redirectDetail}: IFavoriteTemplate) => {
    const {favorites} = useFavoriteStore();

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
        <View>
            <Header
                name={'Favoritos'}
            />
            <FlatListComponent
                list={favorites}
                renderItem={({item}: any) => (
                    <Item
                        item={item}
                    />
                )}
                contentStyle={styles.flatList}
                empty={<TextComponent styles={styles.textEmpty} text={'No tiene aún favoritos'} />}
            />
        </View>
    )
}
