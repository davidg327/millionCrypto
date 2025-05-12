import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ListExchangeTemplate} from '../component/templates';
import {useExchangeStore} from '../../../store';
import {ExchangeStackParamList} from '../../../navigation';
import {IExchange} from '../../../interface';
import {styles} from './ListExchangeScreen.styles.ts';

type ExchangeNavigation = NativeStackNavigationProp<ExchangeStackParamList, 'Exchange'>;


export const ListExchangeScreen = () => {
    const navigation = useNavigation<ExchangeNavigation>();
    const {successExchange, getExchanges} = useExchangeStore();

    const redirectInfo = (exchange: IExchange) => {
        navigation.navigate('Detail', {exchange: exchange})
    };

    useEffect(() => {
        if(!successExchange){
            getExchanges();
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ListExchangeTemplate redirectDetail={redirectInfo} />
        </SafeAreaView>
    );
};
