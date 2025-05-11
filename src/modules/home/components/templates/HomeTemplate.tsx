import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from '../../../../components/organisms';
import {Card} from '../organisms';
import {useGlobalStore} from '../../../../store';
import {getColor} from '../../../../functions';
import {styles} from './HomeTemplate.styles.ts';

export const HomeTemplate = () => {
    const {global} = useGlobalStore();
    return (
        <View style={styles.container}>
            <Header name={'Información global'}  />
            <ScrollView>
                <View style={styles.containerCards}>
                    <View style={styles.containerCard}>
                        <Card
                            title={'Cantidad total de criptomonedas'}
                            info={`${global?.coins_count}`}
                            color={'#007BFF'}
                        />
                    </View>
                    <View style={styles.containerCard}>
                        <Card
                            title={'Cantidad de mercados activos'}
                            info={`${global?.active_markets}`}
                            color={'#FD7E14'}
                        />
                    </View>
                </View>
                <View style={styles.containerCards}>
                    <View style={styles.containerCard}>
                        <Card
                            title={'Dominancia de Bitcoin en porcentaje'}
                            info={`${global?.btc_d}%`}
                            color={'#F2A900'}
                        />
                    </View>
                    <View style={styles.containerCard}>
                        <Card
                            title={'Dominancia de Ethereum en porcentaje'}
                            info={`${global?.eth_d}%`}
                            color={'#3C3CFF'}
                        />
                    </View>
                </View>
                <View style={styles.containerOnlyCard}>
                    <Card
                        title={'Cambio del mercado en las últimas 24 horas'}
                        info={`${global?.mcap_change ?? ''}%`}
                        color={`${getColor(global?.mcap_change ?? '')}`}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
