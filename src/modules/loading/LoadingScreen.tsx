import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoadingComponent} from '../../components/atoms';
import {useFavoriteStore} from "../../store/favorite";
import {AppRootStackParamList} from '../../navigation';
import {Colors} from '../../theme';
import {StorageAdapter} from '../../config/adapters/storage.adapter.ts';
import {styles} from './LoadingScreen.styles.ts';

type LoadingNavigation = NativeStackNavigationProp<
    AppRootStackParamList,
    'Loading'
>;


export const LoadingScreen = () => {
    const navigation = useNavigation<LoadingNavigation>();

    const {getAllFavorites} = useFavoriteStore();
    const getStorage = async () => {
        const favorites = await StorageAdapter.getItem('favorites');
        if(favorites !== null){
            getAllFavorites(favorites);
        }
    };

    useEffect(() => {
        getStorage();
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
