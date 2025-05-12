import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListExchangeScreen} from '../modules/exchange/ListExchange';

export type ExchangeStackParamList = {
    Exchange: undefined;
};

const Stack = createNativeStackNavigator<ExchangeStackParamList>();

const ExchangeStackNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Exchange" children={ListExchangeScreen} />
        </Stack.Navigator>
    );
};

export default ExchangeStackNavigator;
