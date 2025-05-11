import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListCryptoScreen} from '../modules/crypto';

export type CryptoStackParamList = {
    Crypto: undefined;
};

const Stack = createNativeStackNavigator<CryptoStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Crypto" children={ListCryptoScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
