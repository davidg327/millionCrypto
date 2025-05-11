import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/organisms';
import {HomeScreen} from '../modules/home';
import CryptoStack from './CryptoStack.tsx';
import ExchangeStack from './ExchangeStack.tsx';
import {FavoriteScreen} from '../modules/favorite';

export type TRootMainTabParams = {
    Home: undefined;
    CryptoStack: undefined;
    ExchangeStack: undefined;
    Favorite: undefined;
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
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

export default TabStack;
