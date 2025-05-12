import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailCryptoScreen, ListCryptoScreen} from '../modules/crypto';
import {ICrypto} from '../interface';

export type CryptoStackParamList = {
    Crypto: undefined;
    Detail: {crypto: ICrypto};
};

const Stack = createNativeStackNavigator<CryptoStackParamList>();

const CryptoStackNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Crypto" children={ListCryptoScreen} />
            <Stack.Screen name="Detail" children={DetailCryptoScreen} />
        </Stack.Navigator>
    );
};

export default CryptoStackNavigator;
