import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/organisms';
import {HomeScreen} from '../modules/home';
import CryptoStack from './CryptoStack.tsx';
import ExchangeStack from './ExchangeStack.tsx';
import {FavoriteScreen} from '../modules/favorite';
import FavoriteStack from "./FavoriteStack.tsx";

export type TRootMainTabParams = {
    Home: undefined;
    CryptoStack: undefined;
    ExchangeStack: undefined;
    FavoriteStack: undefined;
};

const Tab = createBottomTabNavigator<TRootMainTabParams>();

const TabStack = ({}) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="CryptoStack" component={CryptoStack} />
            <Tab.Screen name="ExchangeStack" component={ExchangeStack} />
            <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
        </Tab.Navigator>
    );
}

export default TabStack;
