import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ListCryptoTemplate} from '../components/templates';
import {useCryptoStore} from '../../../store';
import {styles} from './ListCryptoScreen.styles.ts';

export const ListCryptoScreen = () => {

    const start = useCryptoStore(state =>  state.start);
    const {getCryptos} = useCryptoStore();

    const moreData = () => {
        const newStart = useCryptoStore.getState().start;
        if(newStart !== 0){
            getCryptos(newStart);
        }
    };

    useEffect(() => {
        if(start === 0){
            getCryptos(0);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ListCryptoTemplate moreData={moreData} />
        </SafeAreaView>
    );
};
