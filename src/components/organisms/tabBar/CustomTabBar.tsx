import React from 'react';
import type {
    NavigationHelpers,
    ParamListBase,
    TabNavigationState,
} from '@react-navigation/native';
import {Pressable, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextComponent} from '../../atoms';
import {Colors} from '../../../theme';
import {customTabBarStyles} from './tabBar.styles.ts';

interface ICustomTabBar {
    state: TabNavigationState<ParamListBase>;
    navigation: NavigationHelpers<ParamListBase>;
}

interface IRoute {
    name: string;
    key: string;
}

interface RouteIcon {
    icon: (color: string) => React.ReactNode;
    name: string;
}

const routeIcons: { [key: string]: RouteIcon } = {
    Home: {
        icon: (color: string) => (
            <FontAwesome name={'home'} color={color} size={25} />
        ),
        name: 'Home',
    },
    CryptoStack: {
        icon: (color: string) => (
            <FontAwesome name={'bitcoin'} color={color} size={25} />
        ),
        name: 'Criptos',
    },
    ExchangeStack: {
        icon: (color: string) => (
            <FontAwesome name={'exchange'} color={color} size={25} />
        ),
        name: 'Intercambios',
    },
    Favorite: {
        icon: (color: string) => (
            <FontAwesome name={'heart'} color={color} size={25} />
        ),
        name: 'Favorite',
    }
};

export const CustomTabBar = ({ state, navigation }: ICustomTabBar) => {
    return (
        <View style={customTabBarStyles.container}>
            {state.routes.map((route: IRoute, index: number) => {
                const isFocused = state.index === index;
                let iconColor = isFocused ? Colors.white : Colors.inactive;
                const { icon, name } = routeIcons[route.name];
                const stylesText = {
                    ...customTabBarStyles.text,
                    color: isFocused ? Colors.white : Colors.inactive,
                };
                return (
                    <Pressable
                        onPress={async () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: route.name }],
                            });
                        }}
                        key={route.key}
                    >
                        <View style={customTabBarStyles.containerIcon}>
                            {icon(iconColor)}
                        </View>
                        <TextComponent styles={stylesText} text={name} />
                    </Pressable>
                );
            })}
        </View>
    );
};
