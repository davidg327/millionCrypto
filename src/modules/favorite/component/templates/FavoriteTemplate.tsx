import React, {useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatListComponent, TextComponent, TextInputComponent} from '../../../../components/atoms';
import {ModalFilter} from '../organisms';
import {Header} from '../../../../components/organisms';
import {CardCrypto} from '../../../crypto/components/organisms';
import {useFavoriteStore} from '../../../../store/favorite';
import {ICrypto} from '../../../../interface';
import {sortData} from '../../../../functions';
import {Colors} from '../../../../theme';
import {styles} from './FavoriteTemplate.styles.ts';


interface IFavoriteTemplate {
    redirectDetail: (value: ICrypto) => void;
}

interface IItem {
    item: ICrypto;
}

export const FavoriteTemplate = ({redirectDetail}: IFavoriteTemplate) => {
    const {favorites} = useFavoriteStore();

    const [text, setText] = useState('');
    const [search, setSearch] = useState<ICrypto[] | []>([]);
    const [orderRankAsc, setOrderRankAsc] = useState(false);
    const [orderRankDesc, setOrderRankDesc] = useState(false);
    const [orderPriceAsc, setOrderPriceAsc] = useState(false);
    const [orderPriceDesc, setOrderPriceDesc] = useState(false);

    const sheetRef = useRef<BottomSheetModal | null>(null);

    const handleOrderRankAsc = (value: boolean) => {
        setOrderRankAsc(value);
        if (value) {
            setOrderRankDesc(false);
        }
    };

    const handleOrderRankDesc = (value: boolean) => {
        setOrderRankDesc(value);
        if (value){
            setOrderRankAsc(false);
        }
    };

    const handleOrderPriceAsc = (value: boolean) => {
        setOrderPriceAsc(value);
        if (value) {
            setOrderPriceDesc(false);
        }
    };

    const handleOrderPriceDesc = (value: boolean) => {
        setOrderPriceDesc(value);
        if (value){
            setOrderPriceAsc(false);
        }
    };

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

    const handleSearch = () => {
        if(search.length > 0){
            setSearch([]);
            setText('');
        }else{
            const lowerSearch = text.toLowerCase();
            const newFavorites = favorites.filter(coin =>
                coin.name.toLowerCase().includes(lowerSearch) ||
                coin.symbol.toLowerCase().includes(lowerSearch)
            );
            setSearch(newFavorites);
        }
    };

    const handleApplyFilter = () => {
        const newInfo = sortData(favorites, orderRankAsc, orderRankDesc, orderPriceAsc, orderPriceDesc);
        setSearch(newInfo);
        sheetRef?.current?.dismiss();
    };

    const openFilter = () => {
        sheetRef?.current?.present();
    };

    const closeModal = () => {
        sheetRef?.current?.dismiss();
        setOrderRankAsc(false);
        setOrderRankDesc(false);
        setOrderPriceAsc(false);
        setOrderPriceDesc(false);
        setSearch([]);
    };


    return (
        <View>
            <Header
                name={'Favoritos'}
                iconRight={favorites.length > 0 ? <Pressable style={styles.icon} onPress={openFilter}>
                    <FontAwesome name={'filter'} color={Colors.white} size={35} />
                </Pressable> : null}
            />
            {favorites.length > 0 && (
                <View>
                    <TextInputComponent
                        placeholder={'Buscador'}
                        value={text}
                        onChange={setText}
                        styles={styles.input}
                    />
                    <Pressable onPress={handleSearch} style={styles.iconSearch}>
                        <FontAwesome name={search.length > 0 ? 'close' : 'search'} color={Colors.inactive} size={25} />
                    </Pressable>
                </View>
            )}
            <FlatListComponent
                list={search.length > 0 ? search : favorites}
                renderItem={({item}: any) => (
                    <Item
                        item={item}
                    />
                )}
                contentStyle={styles.flatList}
                empty={<TextComponent styles={styles.textEmpty} text={'No tiene aún favoritos'} />}
            />
            <ModalFilter
                sheetRef={sheetRef}
                setOrderRankAsc={handleOrderRankAsc}
                orderRankAsk={orderRankAsc}
                setOrderRankDesc={handleOrderRankDesc}
                orderRankDesc={orderRankDesc}
                setOrderPriceAsc={handleOrderPriceAsc}
                orderPriceAsc={orderPriceAsc}
                setOrderPriceDesc={handleOrderPriceDesc}
                orderPriceDesc={orderPriceDesc}
                handleApplyFilter={handleApplyFilter}
                closeModal={closeModal}
            />
        </View>
    );
};
