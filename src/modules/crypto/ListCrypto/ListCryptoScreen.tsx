import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ListCryptoTemplate} from '../components/templates';
import {CryptoStackParamList} from '../../../navigation';
import {useCryptoStore} from '../../../store';
import {ICrypto} from '../../../interface';
import {styles} from './ListCryptoScreen.styles.ts';

type CryptoNavigation = NativeStackNavigationProp<CryptoStackParamList, 'Crypto'>;

export const ListCryptoScreen = () => {
    const navigation = useNavigation<CryptoNavigation>();
    const start = useCryptoStore(state =>  state.start);
    const {getCryptos} = useCryptoStore();

    const moreData = () => {
        const newStart = useCryptoStore.getState().start;
        if(newStart !== 0){
            getCryptos(newStart);
        }
    };

    const redirectDetail = (crypto: ICrypto) => {
        navigation.navigate('Detail', {crypto: crypto});
    };

    useEffect(() => {
        if(start === 0){
            getCryptos(0);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ListCryptoTemplate moreData={moreData} redirectDetail={redirectDetail} />
        </SafeAreaView>
    );
};
