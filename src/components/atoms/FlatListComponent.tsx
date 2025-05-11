import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';

interface IFlatListComponent {
    list: any[];
    renderItem: ListRenderItem<any>;
    style?: ViewStyle;
    empty?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    contentStyle?: ViewStyle;
    loadMoreCryptos: () => void;
}

export const FlatListComponent = ({
                                      list,
                                      renderItem,
                                      style,
                                      empty,
                                      contentStyle,
                                      loadMoreCryptos,
                                      footer,
                                  }: IFlatListComponent) => {
    return (
        <FlatList
            data={list}
            renderItem={renderItem}
            style={style}
            contentContainerStyle={contentStyle}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={empty}
            ListFooterComponent={footer}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMoreCryptos}
            onEndReachedThreshold={0.1}
        />
    );
};
