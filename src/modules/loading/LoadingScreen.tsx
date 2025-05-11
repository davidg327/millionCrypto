import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoadingComponent} from '../../components/atoms';
import {AppRootStackParamList} from '../../navigation';
import {Colors} from '../../theme';
import {styles} from './LoadingScreen.styles.ts';

type LoadingNavigation = NativeStackNavigationProp<
    AppRootStackParamList,
    'Loading'
>;


export const LoadingScreen = () => {
    const navigation = useNavigation<LoadingNavigation>();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 2000);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <LoadingComponent size={'large'} color={Colors.primary} />
        </SafeAreaView>
    );
};
