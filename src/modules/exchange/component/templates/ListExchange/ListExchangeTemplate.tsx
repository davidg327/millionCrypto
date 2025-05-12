import React from 'react';
import {View} from 'react-native';
import {FlatListComponent, LoadingComponent, TextComponent} from '../../../../../components/atoms';
import {CardExchange} from '../../organisms';
import {Header} from '../../../../../components/organisms';
import {useExchangeStore} from '../../../../../store';
import {IExchange} from '../../../../../interface';
import {Colors} from '../../../../../theme';
import {styles} from './ListExchangeTemplate.styles.ts';

interface IItem {
    item: IExchange;
}

interface IListExchangeTemplate {
    redirectDetail: (id: IExchange) => void;
}

export const ListExchangeTemplate = ({redirectDetail}: IListExchangeTemplate) => {

    const {loadExchange, exchanges} = useExchangeStore();

    const Item = ({item}: IItem) => {
        return (
            <CardExchange
                name={item.name}
                country={item.country}
                onPress={() => redirectDetail(item)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header name={'Intercambios'}  />
            {loadExchange && (
                <View style={styles.load}>
                    <LoadingComponent size={'large'} color={Colors.primary} />
                </View>
            )}
            {exchanges.length > 0 && (
                <FlatListComponent
                    list={exchanges}
                    renderItem={({item}: any) => (
                        <Item
                            item={item}
                        />
                    )}
                    contentStyle={styles.flatList}
                    empty={<TextComponent styles={styles.textEmpty} text={'No hay intercambios disponibles'} />}
                />
            )}
        </View>
    );
};
