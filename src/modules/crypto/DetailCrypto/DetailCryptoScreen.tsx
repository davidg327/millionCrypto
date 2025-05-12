import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {DetailCryptoTemplate} from '../components/templates';
import {useCryptoStore} from '../../../store';
import {CryptoStackParamList} from '../../../navigation';
import {styles} from './DetailCryptoScreen.styles.ts';
import {useFavoriteStore} from "../../../store/favorite";
import {useNotification} from "../../../hooks";

type DetailNavigation = NativeStackNavigationProp<CryptoStackParamList, 'Detail'>;
interface IProps extends NativeStackScreenProps<CryptoStackParamList, 'Detail'> {}

export const DetailCryptoScreen = ({route}: IProps) => {
    const navigation = useNavigation<DetailNavigation>();
    const {showNotification} = useNotification();

    const {getMarkets, cleanMarkets} = useCryptoStore();
    const {favorites, getFavorites, deleteFavorite} = useFavoriteStore();
    const {crypto} = route.params;

    const goBack = () => {
        cleanMarkets();
        navigation.goBack();
    };

    const pressFavorite = () => {
        const findFavorite = favorites.find((favorite) => favorite.id === crypto.id);
        if(findFavorite !== undefined){
            deleteFavorite(crypto.id);
            showNotification('¡Criptomoneda quitada de favoritos!', 'success');
        }else{
            getFavorites(crypto);
            showNotification('¡Criptomoneda agregada a favoritos!', 'success');
        }
    };

    useEffect(() => {
        getMarkets(crypto.id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <DetailCryptoTemplate
                crypto={crypto}
                goBack={goBack}
                pressFavorite={pressFavorite}
            />
        </SafeAreaView>
    );
};
