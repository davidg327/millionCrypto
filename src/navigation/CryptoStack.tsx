import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListCryptoScreen} from '../modules/crypto';

export type CryptoStackParamList = {
    Crypto: undefined;
};

const Stack = createNativeStackNavigator<CryptoStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Crypto" children={ListCryptoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
