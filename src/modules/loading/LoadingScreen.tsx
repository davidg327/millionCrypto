import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoadingComponent} from '../../components/atoms';
import {Colors} from '../../theme';
import {styles} from './LoadingScreen.styles.ts';

export const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LoadingComponent size={'large'} color={Colors.primary} />
        </SafeAreaView>
    );
};
