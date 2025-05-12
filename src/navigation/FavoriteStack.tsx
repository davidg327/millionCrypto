import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailCryptoScreen, ListCryptoScreen} from '../modules/crypto';
import {ICrypto} from '../interface';
import {FavoriteScreen} from "../modules/favorite";

export type FavoriteStackParamList = {
    Favorite: undefined;
    Detail: {crypto: ICrypto};
};

const Stack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStackNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Favorite" children={FavoriteScreen} />
            <Stack.Screen name="Detail" children={DetailCryptoScreen} />
        </Stack.Navigator>
    );
};

export default FavoriteStackNavigator;
