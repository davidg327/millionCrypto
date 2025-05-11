import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListExchangeScreen} from '../modules/exchange/ListExchange';

export type ExchangeStackParamList = {
    Exchange: undefined;
};

const Stack = createNativeStackNavigator<ExchangeStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Exchange" children={ListExchangeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
