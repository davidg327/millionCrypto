import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailExchangeScreen, ListExchangeScreen} from '../modules/exchange';
import {IExchange} from '../interface';

export type ExchangeStackParamList = {
    Exchange: undefined;
    Detail: {exchange: IExchange};
};

const Stack = createNativeStackNavigator<ExchangeStackParamList>();

const ExchangeStackNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Exchange" children={ListExchangeScreen} />
            <Stack.Screen name="Detail" children={DetailExchangeScreen} />
        </Stack.Navigator>
    );
};

export default ExchangeStackNavigator;
