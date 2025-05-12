import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {DetailExchangeTemplate} from '../component/templates';
import {useExchangeStore} from '../../../store';
import {ExchangeStackParamList} from '../../../navigation';
import {styles} from './DetailExchangeScreen.styles.ts';

type DetailNavigation = NativeStackNavigationProp<ExchangeStackParamList, 'Detail'>;
interface IProps extends NativeStackScreenProps<ExchangeStackParamList, 'Detail'> {}

export const DetailExchangeScreen = ({route}: IProps) => {
    const navigation = useNavigation<DetailNavigation>();

    const {getInfoExchange, cleanPairs} = useExchangeStore();
    const {exchange} = route.params;

    const goBack = () => {
        cleanPairs();
        navigation.goBack();
    };

    useEffect(() => {
        getInfoExchange(exchange.id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <DetailExchangeTemplate exchange={exchange} goBack={goBack} />
        </SafeAreaView>
    );
};
