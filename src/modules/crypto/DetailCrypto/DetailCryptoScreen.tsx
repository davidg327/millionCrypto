import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {DetailCryptoTemplate} from '../components/templates';
import {useCryptoStore} from '../../../store';
import {CryptoStackParamList} from '../../../navigation';
import {styles} from './DetailCryptoScreen.styles.ts';

type DetailNavigation = NativeStackNavigationProp<CryptoStackParamList, 'Detail'>;
interface IProps extends NativeStackScreenProps<CryptoStackParamList, 'Detail'> {}

export const DetailCryptoScreen = ({route}: IProps) => {
    const navigation = useNavigation<DetailNavigation>();

    const {getMarkets, cleanMarkets} = useCryptoStore();
    const {crypto} = route.params;

    const goBack = () => {
        cleanMarkets();
        navigation.goBack();
    };

    useEffect(() => {
        getMarkets(crypto.id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <DetailCryptoTemplate crypto={crypto} goBack={goBack} />
        </SafeAreaView>
    );
};
