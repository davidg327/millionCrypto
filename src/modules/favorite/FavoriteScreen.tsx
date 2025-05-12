import React from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FavoriteTemplate} from './component/templates';
import {FavoriteStackParamList} from '../../navigation';
import {ICrypto} from '../../interface';
import {styles} from './FavoriteScreen.styles.ts';


type FavoriteNavigation = NativeStackNavigationProp<FavoriteStackParamList, 'Favorite'>;

export const FavoriteScreen = () => {
    const navigation = useNavigation<FavoriteNavigation>();
    const redirectDetail = (crypto: ICrypto) => {
        navigation.navigate('Detail', {crypto: crypto});
    };

    return (
        <SafeAreaView style={styles.container}>
            <FavoriteTemplate redirectDetail={redirectDetail}/>
        </SafeAreaView>
    );
};
