import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack.tsx';
import {LoadingScreen} from '../modules/loading';

export type AppRootStackParamList = {
    Loading: undefined;
    Tab: undefined;
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Loading" children={LoadingScreen} />
                <Stack.Screen name="Tab" children={TabStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
