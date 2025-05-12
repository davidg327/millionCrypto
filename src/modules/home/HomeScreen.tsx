import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {LoadingComponent} from '../../components/atoms';
import {HomeTemplate} from './components/templates';
import {useGlobalStore} from '../../store';
import {useNotification} from '../../hooks';
import {Colors} from '../../theme';
import {styles} from './HomeScreen.styles.ts';

export const HomeScreen = () => {
    const {showNotification} = useNotification();
    const {
        loadGlobal,
        successGlobal,
        getGlobal,
    } = useGlobalStore();

    useEffect(() => {
        if(!successGlobal){
            getGlobal();
            showNotification('¡Bienvenido!', 'success');
        }
    }, [successGlobal]);

    return (
        <SafeAreaView style={styles.container}>
            {!loadGlobal && (
                <HomeTemplate />
            )}
            {loadGlobal && (
                <View style={styles.containerLoad}>
                    <LoadingComponent size={'large'} color={Colors.primary} />
                </View>
            )}
        </SafeAreaView>
    );
};
